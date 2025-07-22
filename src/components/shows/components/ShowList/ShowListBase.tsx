import { useGetParsedSheet } from "../../../../hooks/"
import { ShowListBaseProps } from "../types"
import { SectionTitle, ShowListWrapper } from "./ShowList.styled"

export const ShowListBase = ({ title, loveMode }: ShowListBaseProps) => {    
    const sheetURL = useGetParsedSheet()
    return (
        <ShowListWrapper>
            <SectionTitle $loveMode={loveMode}>{title}</SectionTitle>
        </ShowListWrapper>
    )
}
