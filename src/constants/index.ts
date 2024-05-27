export const LANGUAGES = [
    { code: "pt" },
    { code: "en" },
];

export const contacts = [
    {icon: {src: "/images/icon-phone.svg", alt: "contacts.alt.phone"}, text: "+55 21 993945805", link: "tel:5521993945805" },
    {icon: {src: "/images/icon-email.svg", alt: "contacts.alt.mail"}, text: "miragayatri@gmail.com", link: "mailto:miragayatri@gmail.com" },
    {icon: {src: "/images/icon-linkedin.svg", alt: "contacts.alt.linkedin"}, text: "linkedin.com/in/amiragayatri", link: "https://linkedin.com/in/amiragayatri" },
    {icon: {src: "/images/icon-website.svg", alt: "contacts.alt.site"}, text: "amiragayatri.dev", link: "https://amiragayatri.dev" }
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
        items: ["webbasics", "javascript", "php", "basics"]
    },{
        name: "projects",
        items: ["accessibility", "shehacks", "principia", "vemPraUSP", "pet"]
    },
]