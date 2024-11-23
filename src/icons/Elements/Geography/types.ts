const geographyArr = ["cedar", "flag", "globe", "map", "mappin"] as const

type geographyKey = (typeof geographyArr)[number]

export type { geographyKey }
export { geographyArr }
