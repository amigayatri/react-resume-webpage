const ancientArr = [
    "atlas",
    "bastet",
    "centaur",
    "egyptianbird",
    "egyptiancat",
    "egyptianpyramids",
    "egyptiansphinx",
    "egyptianwalk",
    "eyeofhorus",
    "greeksphinx",
    "greektemple",
    "icarus",
    "mayanpyramid",
    "mermaid",
    "trojanhorse",
    "venusofwillendorf"
] as const

type ancientKey = (typeof ancientArr)[number]

export type { ancientKey }
export { ancientArr }