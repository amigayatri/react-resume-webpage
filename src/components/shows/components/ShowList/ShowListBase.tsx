import { useEffect, useState } from "react"
import { useGetParsedShows } from "../../../../hooks/"
import { ShowListBaseProps } from "../types"
import { SectionTitle, ShowListItem, ShowListWrapper } from "./ShowList.styled"

export const ShowListBase = ({ title, loveMode }: ShowListBaseProps) => {
    const [sheetLines, setSheetLines] = useState<string[]>([])

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
            {sheetLines.length > 0 && sheetLines.map((line, index) => <ShowListItem key={index}>{line}</ShowListItem>)}
        </ShowListWrapper>
    )
}
