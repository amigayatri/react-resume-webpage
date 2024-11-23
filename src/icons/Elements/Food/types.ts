const foodArr = [
    "beer",
    "bowl",
    "bread",
    "burger",
    "cake",
    "drink",
    "icecream",
    "index",
    "pizza",
    "types.ts"
] as const;

type foodKey = (typeof foodArr)[number];

export type { foodKey };
export { foodArr };
