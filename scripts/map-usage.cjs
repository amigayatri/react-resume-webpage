const fileFn = require("./files.cjs")
const utils = require("./utils.cjs")
const xml = require("./xml.cjs")
const template = require("./template.cjs")

const { concat } = utils

const componentsPath = "./src/components"

const iconTag = "<SVGIcon"

const getAttr = xml.getAttrVal
const getTag = xml.getTag

const componentsWithIcon = new Map()

const dynamicIcons = new Map()

const registerIcon = (iconTagStr, filePath) => {
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

const indirectTags = ["MulticoloredName", "Select"]
const hasIndirect = []

const readFile = (filePath) => {
	if (filePath.indexOf(".tsx") >= 0) {
		const fileContent = fileFn.readFile(filePath)
		if (fileContent.indexOf(iconTag) >= 0) {
			const iconTagStr = getTag(fileContent, "SVGIcon")
			componentsWithIcon.set(filePath, iconTagStr)
		}
		for (const indirectTag of indirectTags) {
			if (fileContent.indexOf(indirectTag) >= 0) {
				const indirectTagStr = getTag(fileContent, indirectTag)
				if (indirectTagStr.includes("iconId")) hasIndirect.push(filePath)
			}
		}
	}
}

const iconUsage = new Map()

const markAsUsed = (id, local) => {
	const prevUsedFromLocal = iconUsage.get(local)
	iconUsage.set(
		local,
		(prevUsedFromLocal === undefined ? new Set() : prevUsedFromLocal).add(
			id.replaceAll('"', "")
		)
	)
}

const readOrPrint = (folderName, basePath) => {
	const folderPath = concat(basePath, folderName)
	const fileList = fileFn.getFolderContent(folderPath, false)
	const subFolderList = fileFn.getFolderContent(folderPath, true)
	fileList.map((filename) => readFile(concat(folderPath, filename)))
	subFolderList.map((subFolderName) => readOrPrint(subFolderName, folderPath))
}

const generateEntriesStr = () => {
	const entries = []
	for (const [local, localIcons] of iconUsage.entries()) {
		const cleanLocal = local.replaceAll('"', "")
		const setStr = Array.from(localIcons)
			.map((id) => `"${id}"`)
			.join(",")
		entries.push(`["${cleanLocal}", new Set([${setStr}])]`)
	}
	return `[${entries.join(",")}]`
}

const readAllSourceFolders = () => {
	scanComponents()
	scanConstants()
	const mapPath = "src/icons/maps/used.ts"
	const mapStr = template.usedIconsMap(generateEntriesStr())
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

const scanConstantFile = (filePath) => {
	const fileContent = fileFn.readFile(filePath)
	if (fileContent.indexOf("icon") >= 0 || fileContent.indexOf("iconKey") >= 0)
		return "definitely"
	else return "don't"
}

const getObjectWithIcons = (fileStr) => {
	const iconPositions = [...fileStr.matchAll(new RegExp(/icon: /gm))].map(
		({ index }) => index
	)
	const idArr = []
	const getId = (startPos) => {
		const idStartPos = fileStr.indexOf('"', startPos)
		const idEndPos = fileStr.indexOf('"', idStartPos + 1)
		const idVal = fileStr.substring(idStartPos + 1, idEndPos)
		idArr.push(idVal)
	}
	iconPositions.map((pos) => getId(pos))
	return idArr
}

const scanConstants = () => {
	const definitelyHave = []
	const dontHave = []
	const constantsPath = "./src/constants"
	const files = fileFn.getFolderContent(constantsPath, false)
	files.map((filename) => {
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
}

const getPaletteGroupIcons = () => {
	const filePath = `src/lib/palettes/maps/icons.ts`
	const fileContent = fileFn
		.readFile(filePath)
		.replaceAll("new Map(", "")
		.replaceAll(")", "")
	const recover = ([_, iconId]) => markAsUsed(iconId, "palette-group")
	const content = new Map([["groupIcons", recover]])
	for (const [key, recoverFn] of content.entries()) {
		recoverConstantIcons(key, fileContent).map(recoverFn)
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
	const filteredFiles = maps.filter((filename) => !filesToExclude.has(filename))
	for (const filename of filteredFiles) {
		const fileContent = fileFn.readFile(concat(palettePath, filename))
		const cleanFileName = filename.replace(".ts", "")
		const usedIcons = getObjectWithIcons(fileContent)
		for (const id of usedIcons) {
			markAsUsed(id, `palettes-${cleanFileName}`)
		}
	}
}

const createKeys = (key) => {
	const keyPreffix = `//\$${key}`
	return [keyPreffix + "Start", keyPreffix + "End"]
}

const recoverConstantIcons = (delimiterKey, fileStr, dontParse) => {
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
	const allIds = []
	const filePath = "./src/constants/animals.ts"
	const fileContent = fileFn.readFile(filePath)
	const recoverNumberIcons = (id) => allIds.push(id)
	const recoverAnimalsIconsIds = ([_, icons]) => allIds.push(...icons)
	const content = new Map([
		["numberIcons", recoverNumberIcons],
		["animalsIcons", recoverAnimalsIconsIds]
	])
	for (const [key, recoverFn] of content.entries()) {
		recoverConstantIcons(key, fileContent).map(recoverFn)
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
	const recoverErrorIcons = ({ id, icons }) => {
		for (const iconId of icons) {
			markAsUsed(iconId, id)
		}
	}
	const content = new Map([
		["notFoundIcons", recoverErrorIcons],
		["maintenanceIcons", recoverErrorIcons]
	])
	for (const [key, recoverFn] of content.entries()) {
		recoverFn(recoverConstantIcons(key, fileContent))
	}
}

const getOtherConstants = () => {
	const recoverTab = (elStr) => {
		const cleanArr = getObjectWithIcons(elStr)
		for (const iconId of cleanArr) {
			markAsUsed(iconId, "stats")
		}
	}
	const recoverAvailableMusics = ([_, [__, iconId]]) => {
		markAsUsed(iconId, "available-musics")
	}
	const recoverEmotions = (iconId) => markAsUsed(iconId, "holidays")
	const recoverAnimals = (iconId) => markAsUsed(iconId, "animals")
	const pathContentMap = new Map([
		[
			"./src/components/brasil/holidays/components/HolidayList/Holiday/index.tsx",
			new Map([["emotion", recoverEmotions]])
		],
		[
			"./src/components/cats/components/AddButtons/index.tsx",
			new Map([["plusplus", recoverAnimals]])
		],
		[
			"./src/components/stats/Stats/StatsBase.tsx",
			new Map([
				["leetcodeTab", recoverTab],
				["gitTab", recoverTab]
			])
		],
		[
			"src/lib/musics/constants.ts",
			new Map([["availableMusicsIcons", recoverAvailableMusics]])
		]
	])
	const getRaw = new Set(["leetcodeTab", "gitTab"])
	for (const [path, content] of pathContentMap.entries()) {
		const fileContent = fileFn
			.readFile(path)
			.replaceAll("new Map(", "")
			.replaceAll(")", "")
		for (const [key, recoverFn] of content) {
			const keyStr = recoverConstantIcons(key, fileContent, getRaw.has(key))
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
