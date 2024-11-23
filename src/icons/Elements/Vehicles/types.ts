const vehiclesArr = [
    "bike",
    "bus",
    "car",
    "carriertruck",
    "motorbike",
    "plane",
    "skateboarding1",
    "skateboarding2",
    "train",
    "truck",
    "walk"
] as const

type vehiclesKey = (typeof vehiclesArr)[number]

export type { vehiclesKey }
export { vehiclesArr }
