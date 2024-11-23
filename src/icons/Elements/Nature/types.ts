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
    "planet",
    "plant",
    "prism",
    "rain",
    "rainbow",
    "snowflake",
    "star",
    "tornado",
    "waterfall",
    "wavecrest",
    "windy"
] as const

type natureKey = (typeof natureArr)[number]

export type { natureKey }
export { natureArr }
