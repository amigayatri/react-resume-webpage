const miscArr = [
    "fisherman",
    "hightide",
    "schrodingerscatalive",
    "schrodingerscatdead",
    "toybrick"
] as const

type miscKey = (typeof miscArr)[number]

export type { miscKey }
export { miscArr }