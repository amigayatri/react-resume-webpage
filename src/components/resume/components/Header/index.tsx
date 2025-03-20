import { HeaderProps } from "../../types.ts"
import { HeaderWrapper, Name, SubHeading } from "./Header.styled"

export const Header = ({ name, job }: HeaderProps) => {
    return (
        <HeaderWrapper>
            <Name>{name}</Name>
            <SubHeading>{job}</SubHeading>
        </HeaderWrapper>
    )
}
