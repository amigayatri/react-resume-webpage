const techArr = [
    "code",
    "computer",
    "disc",
    "gamepad",
    "lightbulb",
    "megaphone",
    "phone",
    "polaroid",
    "robot",
    "rocket",
    "smartphone",
    "television",
    "trademark",
    "vhs",
    "website"
] as const

type techKey = (typeof techArr)[number]

export type { techKey }
export { techArr }
