export const LANGUAGES = [
    { code: "pt" },
    { code: "en" },
];

export const contacts = [
    {icon: {id: "phone", alt: "resume.contacts.alt.phone"}, text: "+55 21 993945805", link: "tel:+5521993945805", showOnWeb: true },
    {icon: {id: "email", alt: "resume.contacts.alt.mail"}, text: "miragayatri@gmail.com", link: "mailto:miragayatri@gmail.com", showOnWeb: true },
    {icon: {id: "linkedin", alt: "resume.contacts.alt.linkedin"}, text: "linkedin.com/in/amiragayatri", link: "https://linkedin.com/in/amiragayatri", showOnWeb: true },
    {icon: {id: "website", alt: "resume.contacts.alt.site"}, text: "amiragayatri.dev", link: "https://amiragayatri.dev", showOnWeb: false }
]

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