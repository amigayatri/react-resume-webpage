const generalArr = [
    "award",
    "bankcard",
    "briefcase",
    "candle",
    "clapperboard",
    "crown",
    "dice",
    "film",
    "glasses",
    "graduationcap",
    "key",
    "magazine",
    "medal",
    "music",
    "office",
    "palette",
    "pantone",
    "pulse",
    "puzzle",
    "resttime",
    "sparkling",
    "testtube",
    "umbrella"
] as const

type generalKey = (typeof generalArr)[number]

export type { generalKey }
export { generalArr }