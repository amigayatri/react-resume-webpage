import SectionProps from "../types/SectionProps"

const sections: SectionProps[] = [
	{
		name: "education",
		items: ["grad"],
		subitem: false
	},
	{
		name: "experience",
		items: ["atip", "techviz", "encora", "raccoon", "partenero", "liven"],
		subitem: true
	},
	{
		name: "languages",
		items: ["pt", "en"],
		subitem: false
	},
	{
		name: "technologies",
		items: ["webbasics", "javascript", "otherframeworks", "php", "basics"],
		subitem: false
	},
	{
		name: "projects",
		items: ["accessibility", "shehacks", "principia", "vemPraUSP", "pet"],
		subitem: false
	}
]

export default sections
