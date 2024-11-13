import { IconWrapper } from "./ProgrammingIcons.styled"

import { BiLogoJava, BiLogoPostgresql } from "react-icons/bi"
import {
	SiC,
	SiCplusplus,
	SiCsharp,
	SiDart,
	SiElixir,
	SiErlang,
	SiGnubash,
	SiJavascript,
	SiMicrosoftsqlserver,
	SiMysql,
	SiOracle,
	SiPandas,
	SiPhp,
	SiPython,
	SiRacket,
	SiReact,
	SiRuby,
	SiRust,
	SiScala,
	SiSwift,
	SiTypescript
} from "react-icons/si"
import { TbBrandGolang, TbBrandKotlin } from "react-icons/tb"

const iconNames = new Map([
	["bash", SiGnubash],
	["c", SiC],
	["cpp", SiCplusplus],
	["csharp", SiCsharp],
	["dart", SiDart],
	["elixir", SiElixir],
	["erlang", SiErlang],
	["go", TbBrandGolang],
	["java", BiLogoJava],
	["javascript", SiJavascript],
	["kotlin", TbBrandKotlin],
	["microsoftsqlserver", SiMicrosoftsqlserver],
	["mysql", SiMysql],
	["oracle", SiOracle],
	["pandas", SiPandas],
	["php", SiPhp],
	["postgresql", BiLogoPostgresql],
	["python", SiPython],
	["python3", SiPython],
	["racket", SiRacket],
	["react", SiReact],
	["ruby", SiRuby],
	["rust", SiRust],
	["scala", SiScala],
	["swift", SiSwift],
	["typescript", SiTypescript],
	["vanillajs", SiJavascript]
])
interface ProgrammingIconsProps {
	id: string
	size: number
}

export const ProgrammingIcons = ({ id, size }: ProgrammingIconsProps) => {
	const Icon = iconNames.get(id.toLowerCase())
	if (Icon === undefined) return
	return (
		<IconWrapper $size={size}>
			<Icon />
		</IconWrapper>
	)
}
