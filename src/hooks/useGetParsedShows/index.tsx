import { useGetSheet } from "../"

const showURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWl4nUiwg4npv2nxQzIFQETZLTG6BcE4JURIl1Menscbc7pu1_6_r9p2AN7fSKMhE8LWmdk_J2Dj3T/pub?gid=0&single=true&output=tsv"

const formatCasing = (str: string) => str[0].toLowerCase() + str.slice(1)

const createObjectKeysStructure = (headerLine: string) => {
    const keyNames = headerLine.split("\t")
    const goingOut = "goingOut"
    const comingBack = "comingBack"
    const accomodation = "accommodation"
    const travel = "travel"
    const ticket = "ticket"
    const goingOutInfo = []
    const comingBackInfo = []
    const accomodationInfo = []
    const showInfo = []
    const indexes = new Map()
    for (let i = 0; i < keyNames.length; i++) {
        const key = keyNames[i]
        if (key.includes(goingOut)) {
            indexes.set(i, goingOut)
            goingOutInfo.push([formatCasing(key.replace(goingOut, "")), ""])
        } else if (key.includes(comingBack)) {
            indexes.set(i, comingBack)
            comingBackInfo.push([formatCasing(key.replace(comingBack, "")), ""])
        } else if (key.includes(accomodation)) {
            indexes.set(i, accomodation)
            accomodationInfo.push([formatCasing(key.replace(accomodation, "")), ""])
        } else if (key === "ticketType") {
            indexes.set(i, ticket)
            showInfo.push([ticket, { type: "", purchased: false }])
        } else {
            indexes.set(i, "root")
            showInfo.push([key, ""])
        }
    }
    const travelObject = {
        [goingOut]: Object.fromEntries(goingOutInfo),
        [comingBack]: Object.fromEntries(comingBackInfo)
    }
    showInfo.push([travel, travelObject])
    const accomodationObject = Object.fromEntries(accomodationInfo)
    showInfo.push([accomodation, accomodationObject])
    const showObject = Object.fromEntries(showInfo)
    return { showObject, indexes }
}

const cloneObject = (obj: any) => {
    return JSON.parse(JSON.stringify(obj))
}

const noTravelCities = new Set(["Belo Horizonte", "Contagem"])

export const useGetParsedShows = async () => {
    const tsvText = await useGetSheet(showURL)
    const tsvLines = tsvText.split("\r\n")
    const rawHeader = tsvLines.shift()
    if (rawHeader === undefined) {
        console.log("Table header is undefined")
        return []
    }
    const rawHeaderArr = rawHeader.split("\t")
    const { showObject, indexes } = createObjectKeysStructure(rawHeader)
    const parsedShows = []
    if (tsvLines.length === 0) {
        console.log("No shows found in the sheet")
        return []
    }
    const parseShowLine = (line: string) => {
        const currObject = cloneObject(showObject)
        const lineValues = line.split("\t")
        for (let i = 0; i < lineValues.length; i++) {
            const mapedIdx = indexes.get(i)
            const idxHeader = rawHeaderArr[i]
            const value = lineValues[i]
            if (mapedIdx === undefined) {
                console.warn(`No mapping found for index ${i}`)
                return undefined
            } else if (mapedIdx === "root") {
                currObject[idxHeader] = value
            } else if (mapedIdx === "ticket") {
                currObject.ticket.type = value
                currObject.ticket.purchased = value !== ""
            } else if (mapedIdx === "goingOut") {
                const idxHeaderClean = formatCasing(idxHeader.replace("goingOut", ""))
                currObject.travel.goingOut[idxHeaderClean] = value
            } else if (mapedIdx === "comingBack") {
                const idxHeaderClean = formatCasing(idxHeader.replace("comingBack", ""))
                currObject.travel.comingBack[idxHeaderClean] = value
            } else if (mapedIdx === "accommodation") {
                const idxHeaderClean = formatCasing(idxHeader.replace("accommodation", ""))
                currObject.accommodation[idxHeaderClean] = value
            }
        }
        if (currObject.artist === "") return undefined
        if (noTravelCities.has(currObject.city)) {
            delete currObject.travel
            delete currObject.accommodation
        }
        return currObject
    }
    for (const line of tsvLines) {
        const currObject = parseShowLine(line)
        if (currObject === undefined) {
            console.warn(`Failed to parse line: ${line}`)
            continue
        }
        parsedShows.push(currObject)
    }
    console.log(showObject)
    return parsedShows
}
