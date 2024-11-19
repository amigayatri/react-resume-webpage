const foodArr = [
    "beer",
    "bowl",
    "bread",
    "burger",
    "cake",
    "drink",
    "icecream",
    "pizza"
] as const

type foodKey = (typeof foodArr)[number]

export type { foodKey }
export { foodArr }