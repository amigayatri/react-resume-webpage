const musicinstrumentsArr = [
    "agogo",
    "guitar",
    "headphone",
    "lovesong",
    "pandeiro",
    "pianist",
    "sanfona",
    "surdo",
    "tamborim",
    "triangulo"
] as const;

type musicinstrumentsKey = (typeof musicinstrumentsArr)[number];

export type { musicinstrumentsKey };
export { musicinstrumentsArr };
