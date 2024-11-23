const techArr = [
    "code",
    "computer",
    "disc",
    "gamepad",
    "index",
    "lightbulb",
    "megaphone",
    "phone",
    "polaroid",
    "robot",
    "rocket",
    "smartphone",
    "television",
    "trademark",
    "types.ts",
    "vhs",
    "website"
] as const;

type techKey = (typeof techArr)[number];

export type { techKey };
export { techArr };
