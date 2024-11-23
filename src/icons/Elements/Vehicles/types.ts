const vehiclesArr = [
    "bike",
    "bus",
    "car",
    "carriertruck",
    "index",
    "motorbike",
    "plane",
    "skateboarding1",
    "skateboarding2",
    "train",
    "truck",
    "types.ts",
    "walk"
] as const;

type vehiclesKey = (typeof vehiclesArr)[number];

export type { vehiclesKey };
export { vehiclesArr };
