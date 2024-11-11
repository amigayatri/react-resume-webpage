import {
	SkillLevelWrapper,
	SkillTag,
	LevelTitle,
	CloudTag
} from "./SkillLevel.styled"
import { Tag } from "react-tagcloud"

interface SkillLevelProps {
	name: string
	skills: Tag[]
}
const rainbow = [
	"#f92472",
	"#f83535",
	"#fd9621",
	"#f4cd04",
	"#a6e22c",
	"#67d8ef",
	"#ac80ff"
]

const getColor = () => {
	const pos = Math.floor(Math.random() * 7)
	return rainbow[pos]
}

const customRenderer = (
	tag: {
		value: string
	},
	size: number
) => {
	return (
		<SkillTag tabIndex={0} key={tag.value} $color={getColor()} $size={size}>
			{tag.value}
		</SkillTag>
	)
}

export const SkillLevel = ({ name, skills }: SkillLevelProps) => {
	return (
		<SkillLevelWrapper>
			<LevelTitle>{name}</LevelTitle>
			<CloudTag
				shuffle
				minSize={16}
				maxSize={32}
				tags={skills}
				renderer={customRenderer}
			/>
		</SkillLevelWrapper>
	)
}
