import { iconKey } from "../types";
import { removeUsed } from "./never";

const usedIcons: Map<string, Set<string>> = new Map([
    ["holidays", new Set(["map"])],
    ["cats", new Set(["minus"])],
    ["palette", new Set(["listunordered"])],
    ["subnav", new Set(["more"])],
    ["error", new Set(["terminalerror"])],
    ["iconsstats", new Set(["chart"])],
    [
        "resume",
        new Set([
            "download",
            "graduationcap",
            "briefcase",
            "translate",
            "code",
            "computer",
            "phone",
            "email",
            "linkedin",
            "website"
        ])
    ],
    ["stats", new Set(["github", "leetcode"])],
    ["leetcode", new Set(["terminal", "external"])],
    [
        "links",
        new Set([
            "home",
            "profile",
            "map",
            "calendariobrasileiro",
            "pantone",
            "palette",
            "music",
            "bastet",
            "chart",
            "egyptianwalk",
            "rainbow",
            "brasil",
            "linkedin",
            "github"
        ])
    ],
    [
        "palette-group",
        new Set([
            "website",
            "rainbow",
            "clapperboard",
            "megaphone",
            "mappin",
            "computer",
            "palette"
        ])
    ],
    [
        "palettes-brands",
        new Set([
            "burger",
            "megaphone",
            "drink",
            "pizza",
            "toybrick",
            "bankcard",
            "mcdonalds",
            "magazine"
        ])
    ],
    [
        "palettes-media",
        new Set([
            "bee",
            "crying",
            "barbie",
            "sonic",
            "gamepad",
            "crown",
            "magicwand",
            "magazine",
            "naruto"
        ])
    ],
    [
        "palettes-places",
        new Set([
            "cedar",
            "star",
            "icecream",
            "mappin",
            "brasil",
            "riodejaneiro"
        ])
    ],
    ["palettes-rainbow", new Set(["terminal", "rainbow"])],
    [
        "palettes-schemes",
        new Set([
            "colorfilter",
            "terminal",
            "website",
            "palette",
            "shadow",
            "pencil",
            "vhs",
            "prism"
        ])
    ],
    [
        "palettes-tech",
        new Set([
            "baidu",
            "facebook",
            "firefox",
            "google",
            "microsoft",
            "spotify",
            "tumblr",
            "whatsapp",
            "wikipedia",
            "youtube"
        ])
    ],
    ["palettes-themes", new Set(["website"])],
    [
        "animals",
        new Set([
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "egyptiancat",
            "cat",
            "labrador",
            "sittingdog",
            "fox",
            "rabbit",
            "gecko",
            "goose",
            "panda",
            "kiwibird",
            "egyptianbird",
            "clownfish",
            "flyingtrout",
            "alpaca",
            "redpanda",
            "plus",
            "equal",
            "plusplus"
        ])
    ],
    ["404", new Set(["brokenlink"])],
    ["maintenance", new Set(["bug", "github", "tools"])],
    [
        "garotadeipanemalyric",
        new Set([
            "samba",
            "beach",
            "mermaid",
            "walk",
            "sparkling",
            "sun",
            "award",
            "moon",
            "snowflake",
            "windy"
        ])
    ],
    [
        "omarserenoulyric",
        new Set([
            "pandeiro",
            "samba",
            "beach",
            "mermaid",
            "fisherman",
            "high tide",
            "moon",
            "sun",
            "snowflake",
            "windy",
            "star"
        ])
    ],
    ["holidays", new Set(["sad", "superhappy", "happy"])],
    ["available-musics", new Set(["mermaid", "bronzeando"])]
]);

type markAsUsed = (id: iconKey, local: string) => void;
const markAsUsed: markAsUsed = (id, local) => {
    const prevUsed = usedIcons.get(local) || new Set();
    prevUsed.add(id);
    usedIcons.set(local, prevUsed);
    removeUsed(id);
};

const getAllUsed = () => {
    return Array.from(usedIcons.entries());
};

export { usedIcons, markAsUsed, getAllUsed };
