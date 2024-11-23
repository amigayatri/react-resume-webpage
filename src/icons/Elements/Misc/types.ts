const miscArr = [
    "fisherman",
    "grenade",
    "hightide",
    "index",
    "paperfrog",
    "schrodingerscatalive",
    "schrodingerscatdead",
    "sexy",
    "toybrick",
    "types.ts"
] as const;

type miscKey = (typeof miscArr)[number];

export type { miscKey };
export { miscArr };
