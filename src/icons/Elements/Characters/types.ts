const charactersArr = [
    "eight",
    "empty",
    "equal",
    "five",
    "four",
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
    "zero"
] as const;

type charactersKey = (typeof charactersArr)[number];

export type { charactersKey };
export { charactersArr };
