const generalArr = [
    "award",
    "bankcard",
    "briefcase",
    "candle",
    "clapperboard",
    "crown",
    "dice",
    "doubleheart",
    "film",
    "glasses",
    "graduationcap",
    "heart",
    "heartpulse",
    "index",
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
    "trophy",
    "types.ts",
    "umbrella"
] as const;

type generalKey = (typeof generalArr)[number];

export type { generalKey };
export { generalArr };
