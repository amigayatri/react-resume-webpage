import { HeaderWrapper, Name, SubHeading } from "./Header.styled"

interface HeaderProps {
	name: string
	job: string
}

const Header = ({ name, job }: HeaderProps) => {
	return (
		<HeaderWrapper>
			<Name>{name}</Name>
			<SubHeading>{job}</SubHeading>
		</HeaderWrapper>
	)
}

export default Header
