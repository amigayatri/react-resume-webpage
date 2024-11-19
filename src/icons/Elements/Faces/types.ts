const facesArr = [
    "alien",
    "crying",
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