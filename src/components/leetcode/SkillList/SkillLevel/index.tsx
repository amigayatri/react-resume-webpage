import { SkillLevelWrapper, SkillTag, LevelTitle } from "./SkillLevel.styled"
import { TagCloud } from "react-tagcloud"

interface SkillLevelProps {
	name: string
	skills: any
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
		value: any
	},
	size: number,
	_color: any
) => {
	return (
		<SkillTag key={tag.value} $color={getColor()} $size={size}>
			{tag.value}
		</SkillTag>
	)
}

const SkillLevel = ({ name, skills }: SkillLevelProps) => {
	return (
		<SkillLevelWrapper>
			<LevelTitle>{name}</LevelTitle>
			<TagCloud
				shuffle
				minSize={16}
				maxSize={32}
				tags={skills}
				renderer={customRenderer}
				onClick={(tag) => alert(`'${tag.value}' was selected!`)}
			/>
		</SkillLevelWrapper>
	)
}

export default SkillLevel
