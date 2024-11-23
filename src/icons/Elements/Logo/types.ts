const logoArr = [
    "baidu",
    "barbie",
    "css",
    "facebook",
    "firefox",
    "github",
    "google",
    "html",
    "javascript",
    "leetcode",
    "linkedin",
    "mcdonalds",
    "microsoft",
    "react",
    "spotify",
    "tumblr",
    "whatsapp",
    "wikipedia",
    "youtube"
] as const;

type logoKey = (typeof logoArr)[number];

export type { logoKey };
export { logoArr };
