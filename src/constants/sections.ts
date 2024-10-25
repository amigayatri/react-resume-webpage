import SectionProps from "../types/SectionProps"

const sections: SectionProps[] = [
	{
		icon: "graduationcap",
		name: "education",
		items: ["grad"],
		dates: [{ start: new Date("2017/02/01"), end: new Date("2022/12/01") }],
		subitem: false
	},
	{
		icon: "briefcase",
		name: "experience",
		items: ["atip", "techviz", "encora", "raccoon", "partenero", "liven"],
		dates: [
			{ start: new Date("2024/03/01"), end: "now" },
			{ start: new Date("2023/07/01"), end: new Date("2024/02/01") },
			{ start: new Date("2022/02/01"), end: new Date("2022/11/01") },
			{ start: new Date("2020/08/01"), end: new Date("2022/02/01") },
			{ start: new Date("2020/02/01"), end: new Date("2020/06/01") },
			{ start: new Date("2019/09/01"), end: new Date("2019/12/01") }
		],
		subitem: true
	},
	{
		icon: "translate",
		name: "languages",
		items: ["pt", "en"],
		subitem: false
	},
	{
		icon: "code",
		name: "technologies",
		items: ["webbasics", "javascript", "otherframeworks", "php", "basics"],
		subitem: false
	},
	{
		icon: "computer",
		name: "projects",
		items: ["accessibility", "shehacks", "principia", "vemPraUSP", "pet"],
		dates: [
			{ start: new Date("2022/09/01"), end: new Date("2022/10/01") },
			{ start: new Date("2019/09/01") },
			{ start: new Date("2019/02/01"), end: new Date("2019/07/01") },
			{ start: new Date("2019/10/01") },
			{ start: new Date("2018/03/01"), end: new Date("2018/11/01") }
		],
		subitem: false
	}
]

export default sections
