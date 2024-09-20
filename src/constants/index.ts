export interface Icon {
	id: string
	size: number
}

export const LANGUAGES = [
    { code: "pt" },
    { code: "en" },
];

export const sections = [
    {
        name: "education",
        items: ["grad"]
    },
    {
        name: "experience",
        items: ["atip","techviz", "encora", "raccoon", "partenero", "liven"],
        subitem: true
    },
    {
        name: "languages",
        items: ["pt", "en"]
    },{
        name: "technologies",
        items: ["webbasics", "javascript", "otherframeworks", "php", "basics"]
    },{
        name: "projects",
        items: ["accessibility", "shehacks", "principia", "vemPraUSP", "pet"]
    },
]