const toggleArr = [
    "index",
    "moon",
    "pause",
    "play",
    "sun",
    "types.ts"
] as const;

type toggleKey = (typeof toggleArr)[number];

export type { toggleKey };
export { toggleArr };
