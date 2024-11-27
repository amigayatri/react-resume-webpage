const natureArr = [
    "beach",
    "cactus",
    "cloud",
    "dna",
    "earth",
    "fire",
    "leaf",
    "lightning",
    "meteor",
    "moon",
    "planet",
    "plant",
    "prism",
    "rain",
    "rainbow",
    "snowflake",
    "star",
    "sun",
    "tornado",
    "waterfall",
    "wavecrest",
    "windy"
] as const

type natureKey = (typeof natureArr)[number]

export type { natureKey }
export { natureArr }
