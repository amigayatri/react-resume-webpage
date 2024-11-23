const charactersArr = [
    "eight",
    "empty",
    "equal",
    "five",
    "four",
    "index",
    "minus",
    "minusminus",
    "nine",
    "one",
    "plus",
    "plusplus",
    "seven",
    "six",
    "three",
    "two",
    "types.ts",
    "zero"
] as const;

type charactersKey = (typeof charactersArr)[number];

export type { charactersKey };
export { charactersArr };
