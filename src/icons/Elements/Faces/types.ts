const facesArr = [
    "alien",
    "crying",
    "fairy",
    "femalevampire",
    "ghost",
    "happy",
    "person",
    "sad",
    "spy",
    "superhappy"
] as const

type facesKey = (typeof facesArr)[number]

export type { facesKey }
export { facesArr }