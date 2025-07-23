import { useGetSheet } from "../"

const showURL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vSWl4nUiwg4npv2nxQzIFQETZLTG6BcE4JURIl1Menscbc7pu1_6_r9p2AN7fSKMhE8LWmdk_J2Dj3T/pub?gid=0&single=true&output=tsv"

// interface TicketWayInfo {
//     date: Date
//     vehicle: "Avião" | "Ônibus" | "Uber" | "A pé"
// }

// interface TicketInfo {
//     from: TicketWayInfo
//     to: TicketWayInfo
// }

// interface AccommodationInfo {
//     checkIn: Date
//     checkOut: Date
//     place: string
// }

// interface ShowInfo {
//     artist: string
//     date: Date
//     city: string
//     needsTravelling: boolean
//     tickets?: TicketInfo
//     accomodation?: AccommodationInfo
// }

// const formatAndParseDate = (dateStr: string) =>
//     new Date(new String(dateStr).split("/").reverse().join("-").concat("GMT -3"))

// type parseAccommodation = ([checkInStr, checkOutStr, place]: string[]) => AccommodationInfo | undefined
// const parseAccommodation: parseAccommodation = ([checkInStr, checkOutStr, place]) => {
//     if (checkInStr === "" || checkInStr === undefined) {
//         console.log("Invalid checkInStr")
//         return
//     }
//     if (checkOutStr === "" || checkOutStr === undefined) {
//         console.log("Invalid checkOutStr")
//         return
//     }
//     if (place === "" || place === undefined) {
//         console.log("Invalid place")
//         return
//     }
//     const checkIn = formatAndParseDate(checkInStr)
//     const checkOut = formatAndParseDate(checkOutStr)
//     if (checkIn.toDateString() === "Invalid Date") {
//         console.log("Check-in date is invalid")
//         return
//     } else if (checkOut.toDateString() === "Invalid Date") {
//         console.log("Check-out date is invalid")
//         return
//     }
//     const accommodationInfo: AccommodationInfo = {
//         checkIn,
//         checkOut,
//         place
//     }
//     return accommodationInfo
// }

// type parseEntry = (rawLine: string) => ShowInfo | void
// const parseEntry: parseEntry = (rawLine) => {
//     const lineArr = rawLine.split(",")
//     const artist = lineArr.shift()
//     if (artist === "" || artist === undefined) return
//     const partialEntry: Partial<ShowInfo> = {}
//     partialEntry.artist = artist
//     const dateStr = lineArr.shift()
//     if (dateStr === undefined) return
//     partialEntry.date = formatAndParseDate(dateStr)
//     const city = lineArr.shift()
//     if (city === undefined) return
//     partialEntry.city = city
//     const needsTravellingStr = lineArr.shift()
//     if (needsTravellingStr === undefined) return
//     const needsTravelling = needsTravellingStr === "TRUE"
//     partialEntry.needsTravelling = needsTravelling
//     if (needsTravelling) {
//         const weHaveTicket = lineArr.shift() === "TRUE"
//         if (weHaveTicket) {
//             //handle later
//         } else {
//             lineArr.splice(0, 4)
//         }
//         const weHaveAccommodation = lineArr.shift() === "TRUE"
//         if (weHaveAccommodation) {
//             const accommodationInfo = parseAccommodation(lineArr)
//             if (accommodationInfo === undefined) {
//                 console.log("There is something wrong with accommodation info")
//             } else {
//                 partialEntry.accomodation = accommodationInfo
//             }
//         }
//     }
//     return partialEntry as ShowInfo
// }

export const useGetParsedShows = async () => {
    const tsvText = await useGetSheet(showURL)
    const tsvLines = tsvText.split("\n")
    const tableHeader = tsvLines.shift()
    console.log("tableHeader", tableHeader)
    return tsvLines
}
