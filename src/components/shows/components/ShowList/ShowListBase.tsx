import { useEffect, useState } from "react"
import { useGetParsedShows } from "../../../../hooks/"
import { ShowItem } from "../ShowItem"
import { ShowListBaseProps, ShowObject } from "../types"
import { SectionTitle, ShowListWrapper } from "./ShowList.styled"

export const ShowListBase = ({ title, loveMode, t, lng }: ShowListBaseProps) => {
    const [sheetLines, setSheetLines] = useState<ShowObject[]>([])

    useEffect(() => {
        useGetParsedShows().then((lines) => {
            if (lines) {
                setSheetLines(lines)
            } else {
                console.error("Failed to fetch or parse shows")
            }
        })
    }, [])

    return (
        <ShowListWrapper>
            <SectionTitle $loveMode={loveMode}>{title}</SectionTitle>
            {sheetLines.length > 0 &&
                sheetLines.map((line, index) => <ShowItem showObject={line} key={index} t={t} lng={lng} />)}
        </ShowListWrapper>
    )
}
