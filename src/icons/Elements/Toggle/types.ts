const toggleArr = ["moon", "pause", "play", "sun"] as const;

type toggleKey = (typeof toggleArr)[number];

export type { toggleKey };
export { toggleArr };
