const fileFn = require("./files.cts")
const utils = require("./utils.cts")
const xml = require("./xml.cts")
const template = require("./template.cts")

const { concat } = utils

const componentsPath: string = "./src/components"

const iconTag: string = "<SVGIcon"

const getAttr = xml.getAttrVal
const getTag = xml.getTag

const componentsWithIcon: Map<string, string> = new Map()

const dynamicIcons: Map<string, string> = new Map()

type registerIcon = (iconTagStr: string, filePath: string) => void
const registerIcon: registerIcon = (iconTagStr, filePath) => {
	let id = getAttr(iconTagStr, "id")
	let local = getAttr(iconTagStr, "local")
	if (id !== undefined && local !== undefined && id.indexOf("{") < 0)
		markAsUsed(id.replaceAll('"', ""), local.replaceAll('"', ""))
	else {
		id = ""
		local = ""
		for (const attrStr of iconTagStr.split(" ")) {
			const [attrName, attrVal] = attrStr.split("=")
			if (attrName === "id") id = attrVal
			if (attrName === "local") local = attrVal
		}
		if (
			id !== "" &&
			id.indexOf("{") < 0 &&
			local !== "" &&
			local.indexOf("{") < 0
		)
			markAsUsed(id.replaceAll('"', ""), local)
		else {
			dynamicIcons.set(filePath, iconTagStr)
		}
	}
}

const indirectTags: string[] = ["MulticoloredName", "Select"]
const hasIndirect: string[] = []

type readFileUsage = (filePath: string) => void
const readFile: readFileUsage = (filePath) => {
	if (filePath.indexOf(".tsx") >= 0) {
		const fileContent = fileFn.readFile(filePath)
		if (fileContent.indexOf(iconTag) >= 0) {
			const iconTagStr = getTag(fileContent, "SVGIcon")
			componentsWithIcon.set(filePath, iconTagStr)
		}
		for (const indirectTag of indirectTags) {
			if (fileContent.indexOf(indirectTag) >= 0) {
				const indirectTagStr = getTag(fileContent, indirectTag)
				if (
					(Array.isArray(indirectTagStr) &&
						indirectTagStr[0].includes("iconId")) ||
					indirectTagStr.includes("iconId")
				)
					hasIndirect.push(fileContent)
			}
		}
	}
}

const quotePossibilities = ['"', "'", "`"]

const hasQuotes = (str: string) => {
	for (const quote of quotePossibilities) {
		if (str.indexOf(quote) >= 0) return true
	}
	return false
}

const indirectSymbols = ["{", "}", ">", "<", "."]

const hasIndirectSymbol = (str: string) => {
	for (const symbol of indirectSymbols) {
		if (str.indexOf(symbol) >= 0) return true
	}
	return false
}

const isDirect = (str: string) => {
	if (hasQuotes(str) && !hasIndirectSymbol(str)) return true
	return false
}

const scanTagForIndirects = (tagStr: string) => {
	const id = xml.getAttrVal(tagStr, "iconId")
	const local = xml.getAttrVal(tagStr, "local")
	if (isDirect(id) && isDirect(local)) {
		markAsUsed(id, local)
	}
}

const handleIndirectIcons = () => {
	for (const tag of hasIndirect) {
		scanTagForIndirects(tag)
	}
}

const iconUsage: Map<string, Set<string>> = new Map()

type markAsUsed = (id: string, local: string) => void
const markAsUsed: markAsUsed = (id, local) => {
	const prevUsedFromLocal = iconUsage.get(local)
	iconUsage.set(
		local,
		(prevUsedFromLocal === undefined
			? new Set<string>()
			: prevUsedFromLocal
		).add(id.replaceAll('"', ""))
	)
}

type readOrPrint = (folderName: string, basePath: string) => void
const readOrPrint: readOrPrint = (folderName, basePath) => {
	const folderPath = concat(basePath, folderName)
	const fileList = fileFn.getFolderContent(folderPath, false)
	const subFolderList = fileFn.getFolderContent(folderPath, true)
	fileList.map((filename) => readFile(concat(folderPath, filename)))
	subFolderList.map((subFolderName) => readOrPrint(subFolderName, folderPath))
}

type generateEntriesStr = () => string
const generateEntriesStr: generateEntriesStr = () => {
	const entries: string[] = []
	for (const [local, localIcons] of iconUsage.entries()) {
		const cleanLocal = local.replaceAll('"', "")
		const setStr = Array.from(localIcons)
			.map((id) => `"${id}"`)
			.join(",")
		entries.push(`["${cleanLocal}", [${setStr}]]`)
	}
	return `[${entries.join(",")}]`
}

const readAllSourceFolders = () => {
	console.log("Map icons usage")
	scanComponents()
	scanConstants()
	const mapPath = "src/icons/maps/used.ts"
	const mapStr = template.usedIconsMap(
		fileFn.readFile(mapPath),
		generateEntriesStr(),
		createKeys("entriesArr")
	)
	fileFn.writeFile(mapPath, mapStr)
}

const scanComponents = () => {
	fileFn.mapFoldersInside(componentsPath, (folderName) => {
		readOrPrint(folderName, componentsPath)
	})
	componentsWithIcon.forEach((val, key) => {
		registerIcon(val[0], key)
	})
	Array.from(dynamicIcons.entries()).map(([path, tag]) => {
		registerIcon(tag, path)
	})
}

type scanConstantFile = (filePath: string) => "definitely" | "don't"
const scanConstantFile: scanConstantFile = (filePath) => {
	const fileContent = fileFn.readFile(filePath)
	if (fileContent.indexOf("icon") >= 0 || fileContent.indexOf("iconKey") >= 0)
		return "definitely"
	else return "don't"
}

type getObjectWithIcons = (fileStr: string) => string[]
type getId = (startPos: number, fileStr: string) => string
const getId: getId = (startPos, fileStr) => {
	const idStartPos = fileStr.indexOf('"', startPos)
	const idEndPos = fileStr.indexOf('"', idStartPos + 1)
	const idVal = fileStr.substring(idStartPos + 1, idEndPos)
	return idVal
}

const getObjectWithIcons: getObjectWithIcons = (fileStr) => {
	const iconPositions = [...fileStr.matchAll(new RegExp(/icon: /gm))].map(
		({ index }) => index
	)
	const idArr: string[] = iconPositions.map((pos) => getId(pos, fileStr))
	return idArr
}

const scanConstants = () => {
	const definitelyHave: string[] = []
	const dontHave: string[] = []
	const constantsPath = "./src/constants"
	const files = fileFn.getFolderContent(constantsPath, false)
	files.map((filename: string) => {
		const hasIcon = scanConstantFile(concat(constantsPath, filename))
		if (hasIcon === "definitely") definitelyHave.push(filename)
		else dontHave.push(filename)
	})
	for (const filename of definitelyHave) {
		const fileContent = fileFn.readFile(concat(constantsPath, filename))
		const cleanFileName = filename.replace(".ts", "")
		const usedIcons = getObjectWithIcons(fileContent)
		for (const id of usedIcons) {
			markAsUsed(id, cleanFileName)
		}
	}
	getConstantsHardCoded()
	handleIndirectIcons()
}

const getPaletteGroupIcons = () => {
	const filePath = `src/lib/palettes/maps/icons.ts`
	const fileContent = fileFn
		.readFile(filePath)
		.replaceAll("new Map(", "")
		.replaceAll(")", "")
	const recover = ([_, iconId]) => markAsUsed(iconId, "palette-group")
	const content: [string, any][] = [["groupIcons", recover]]
	for (const [key, recoverFn] of content) {
		const recovered = recoverConstantIcons(key, fileContent)
		if (Array.isArray(recovered)) {
			recovered.forEach(recoverFn)
		} else {
			recoverFn(recovered)
		}
	}
}

const getPaletteIcons = () => {
	const palettePath = "./src/lib/palettes/maps"
	const maps = fileFn.getFolderContent(palettePath, false)
	getPaletteGroupIcons()
	const filesToExclude = new Set([
		"types.ts",
		"index.ts",
		"functions.ts",
		"icons.ts"
	])
	const filteredFiles = maps.filter(
		(filename: string) => !filesToExclude.has(filename)
	)
	for (const filename of filteredFiles) {
		const fileContent = fileFn.readFile(concat(palettePath, filename))
		const cleanFileName = filename.replace(".ts", "")
		const usedIcons = getObjectWithIcons(fileContent)
		for (const id of usedIcons) {
			markAsUsed(id, `palettes-${cleanFileName}`)
		}
	}
}

type createKeys = (key: string) => [string, string]
const createKeys: createKeys = (key) => {
	const keyPreffix = `//\$${key}`
	return [keyPreffix + "Start", keyPreffix + "End"]
}

type recoverConstantIcons = (
	delimiterKey: string,
	fileStr: string,
	dontParse?: boolean
) => string | string[]
const recoverConstantIcons: recoverConstantIcons = (
	delimiterKey,
	fileStr,
	dontParse = false
) => {
	const [startKey, endKey] = createKeys(delimiterKey)
	const startIdx = fileStr.indexOf(startKey)
	const endIdx = fileStr.indexOf(endKey)
	const valStr = fileStr.substring(startIdx, endIdx + 1)
	const equalPos = valStr.indexOf("=")
	const onlyArr = valStr
		.substring(equalPos + 1)
		.replaceAll("/", "")
		.replaceAll(startKey, "")
	if (dontParse === true) return onlyArr
	const parsed = JSON.parse(`{ "${delimiterKey}" : ${onlyArr} }`)
	return parsed[delimiterKey]
}

const getAnimalIcons = () => {
	const allIds: string[] = []
	const filePath = "./src/constants/animals.ts"
	const fileContent = fileFn.readFile(filePath)
	const recoverNumberIcons = (id: string) => {
		allIds.push(id)
	}
	const recoverAnimalsIconsIds = ([_, icons]: [any, string[]]) => {
		allIds.push(...icons)
	}
	const content: [string, any][] = [
		["numberIcons", recoverNumberIcons],
		["animalsIcons", recoverAnimalsIconsIds]
	]
	for (const [key, recoverFn] of content) {
		const recovered = recoverConstantIcons(key, fileContent)
		if (Array.isArray(recovered)) {
			recovered.forEach(recoverFn)
		} else {
			recoverFn(recovered)
		}
	}
	const local = "animals"
	for (const id of allIds) {
		markAsUsed(id, local)
	}
}

const getErrorIcons = () => {
	const filePath = "./src/constants/errors.ts"
	const fileContent = fileFn
		.readFile(filePath)
		.replaceAll("id:", '"id":')
		.replaceAll("icons:", '"icons":')
	const recoverErrorIcons = ({
		id,
		icons
	}: {
		id: string
		icons: string[]
	}) => {
		for (const iconId of icons) {
			markAsUsed(iconId, id)
		}
	}
	const content: [string, any][] = [
		["notFoundIcons", recoverErrorIcons],
		["maintenanceIcons", recoverErrorIcons]
	]
	for (const [key, recoverFn] of content) {
		const recovered = recoverConstantIcons(key, fileContent)
		if (Array.isArray(recovered)) {
			recovered.forEach(recoverFn)
		} else {
			recoverFn(recovered)
		}
	}
}

const getOtherConstants = () => {
	const recoverTab = (elStr: string) => {
		const cleanArr = getObjectWithIcons(elStr)
		for (const iconId of cleanArr) {
			markAsUsed(iconId, "stats")
		}
	}
	const recoverAvailableMusics = ([_, [__, iconId]]) => {
		markAsUsed(iconId, "available-musics")
	}
	const recoverEmotions = (iconId: string) => markAsUsed(iconId, "holidays")
	const recoverAnimals = (iconId: string) => markAsUsed(iconId, "animals")
	const pathContentMap: Map<string, [string, any][]> = new Map([
		[
			"./src/components/brasil/holidays/components/HolidayList/Holiday/index.tsx",
			[["emotion", recoverEmotions]]
		],
		[
			"./src/components/cats/components/AddButtons/index.tsx",
			[["plusplus", recoverAnimals]]
		],
		[
			"./src/components/stats/Stats/StatsBase.tsx",
			[
				["leetcodeTab", recoverTab],
				["gitTab", recoverTab]
			]
		],
		[
			"src/lib/musics/constants.ts",
			[["availableMusicsIcons", recoverAvailableMusics]]
		]
	])
	const getRaw = new Set(["leetcodeTab", "gitTab"])
	for (const [path, content] of pathContentMap.entries()) {
		const fileContent = fileFn
			.readFile(path)
			.replaceAll("new Map(", "")
			.replaceAll(")", "")
		for (const [key, recoverFn] of content) {
			const keyStr = recoverConstantIcons(
				key,
				fileContent,
				getRaw.has(key)
			)
			if (Array.isArray(keyStr)) {
				keyStr.map(recoverFn)
			} else {
				recoverFn(keyStr)
			}
		}
		dynamicIcons.delete(path)
	}
}

const getConstantsHardCoded = () => {
	getPaletteIcons()
	getAnimalIcons()
	getErrorIcons()
	getLyricIcons()
	getOtherConstants()
}

const getLyricIcons = () => {
	const path = "./public/lyrics"
	fileFn.mapFilesInside(path, (filename) => {
		const filePath = concat(path, filename)
		const fileContent = fileFn.readFile(filePath)
		const parsedMusic = JSON.parse(fileContent)
		const cleanMusicName = utils
			.createTitle(filename, "lyric")
			.replace(".json", "")
			.toLowerCase()
		for (const chorusIcon of parsedMusic.chorus.icons) {
			markAsUsed(chorusIcon, cleanMusicName)
		}
		for (const verseObj of parsedMusic.lyric) {
			const { icons } = verseObj
			for (const verseIcon of icons) {
				markAsUsed(verseIcon, cleanMusicName)
			}
		}
	})
}

module.exports = {
	run: readAllSourceFolders
}
export default module.exports
