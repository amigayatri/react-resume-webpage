const mediaArr = ["barbie", "naruto", "sonic"] as const

type mediaKey = (typeof mediaArr)[number]

export type { mediaKey }
export { mediaArr }
