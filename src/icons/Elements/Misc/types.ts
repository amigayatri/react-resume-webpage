const miscArr = [
    "fisherman",
    "grenade",
    "hightide",
    "paperfrog",
    "schrodingerscatalive",
    "schrodingerscatdead",
    "sexy",
    "toybrick"
] as const;

type miscKey = (typeof miscArr)[number];

export type { miscKey };
export { miscArr };
