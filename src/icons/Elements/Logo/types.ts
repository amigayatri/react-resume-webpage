const logoArr = [
    "baidu",
    "barbie",
    "css",
    "facebook",
    "firefox",
    "github",
    "google",
    "html",
    "index",
    "javascript",
    "leetcode",
    "linkedin",
    "mcdonalds",
    "microsoft",
    "react",
    "spotify",
    "tumblr",
    "types.ts",
    "whatsapp",
    "wikipedia",
    "youtube"
] as const;

type logoKey = (typeof logoArr)[number];

export type { logoKey };
export { logoArr };
