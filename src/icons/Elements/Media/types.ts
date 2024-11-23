const mediaArr = ["index", "naruto", "sonic", "types.ts"] as const;

type mediaKey = (typeof mediaArr)[number];

export type { mediaKey };
export { mediaArr };
