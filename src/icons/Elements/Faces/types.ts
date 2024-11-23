const facesArr = [
    "alien",
    "crying",
    "fairy",
    "femalevampire",
    "ghost",
    "happy",
    "index",
    "person",
    "sad",
    "spy",
    "superhappy",
    "types.ts"
] as const;

type facesKey = (typeof facesArr)[number];

export type { facesKey };
export { facesArr };
