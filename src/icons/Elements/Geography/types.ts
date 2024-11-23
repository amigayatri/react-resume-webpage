const geographyArr = [
    "cedar",
    "flag",
    "globe",
    "index",
    "map",
    "mappin",
    "types.ts"
] as const;

type geographyKey = (typeof geographyArr)[number];

export type { geographyKey };
export { geographyArr };
