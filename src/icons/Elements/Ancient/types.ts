const ancientArr = [
    "atlas",
    "azteccalendarsun",
    "bastet",
    "caveman",
    "centaur",
    "coliseum",
    "colombianstatue",
    "egyptianbird",
    "egyptiancat",
    "egyptianpyramids",
    "egyptiansphinx",
    "egyptianwalk",
    "eyeofhorus",
    "gargoyle",
    "greeksphinx",
    "greektemple",
    "icarus",
    "index",
    "machupicchu",
    "mayanpyramid",
    "mermaid",
    "moai",
    "mountaincave",
    "saintbasilcathedral",
    "seacreature",
    "trojanhorse",
    "types.ts",
    "venusofwillendorf"
] as const;

type ancientKey = (typeof ancientArr)[number];

export type { ancientKey };
export { ancientArr };
