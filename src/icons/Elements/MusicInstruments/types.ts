const musicinstrumentsArr = [
    "agogo",
    "guitar",
    "headphone",
    "index",
    "lovesong",
    "pandeiro",
    "pianist",
    "sanfona",
    "surdo",
    "tamborim",
    "triangulo",
    "types.ts"
] as const;

type musicinstrumentsKey = (typeof musicinstrumentsArr)[number];

export type { musicinstrumentsKey };
export { musicinstrumentsArr };
