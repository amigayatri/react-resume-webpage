const testArr = ["faviconbase", "index", "types.ts"] as const;

type testKey = (typeof testArr)[number];

export type { testKey };
export { testArr };
