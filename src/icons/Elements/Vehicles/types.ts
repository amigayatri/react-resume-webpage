const vehiclesArr = [
    "bike",
    "bus",
    "car",
    "motorbike",
    "plane",
    "train",
    "truck",
    "walk"
] as const

type vehiclesKey = (typeof vehiclesArr)[number]

export type { vehiclesKey }
export { vehiclesArr }