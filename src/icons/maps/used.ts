import { iconKey } from "../types"
import { removeUsed } from "./never"

//$entriesArrStart
const entriesArr: [string, string[]][] = [
    ["holidays", ["map"]],
    ["cats", ["minus"]],
    ["palette", ["listunordered"]],
    ["subnav", ["more"]],
    ["error", ["terminalerror"]],
    ["iconsstats", ["chart"]],
    [
        "resume",
        [
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
        ]
    ],
    ["stats", ["github", "leetcode"]],
    ["leetcode", ["terminal", "external"]],
    [
        "links",
        [
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
        ]
    ],
    [
        "palette-group",
        [
            "website",
            "rainbow",
            "clapperboard",
            "megaphone",
            "mappin",
            "computer",
            "palette"
        ]
    ],
    [
        "palettes-brands",
        [
            "burger",
            "megaphone",
            "drink",
            "pizza",
            "toybrick",
            "bankcard",
            "mcdonalds",
            "magazine"
        ]
    ],
    [
        "palettes-media",
        [
            "bee",
            "crying",
            "barbie",
            "sonic",
            "gamepad",
            "crown",
            "magicwand",
            "magazine",
            "naruto"
        ]
    ],
    [
        "palettes-places",
        ["cedar", "star", "icecream", "mappin", "brasil", "riodejaneiro"]
    ],
    ["palettes-rainbow", ["terminal", "rainbow"]],
    [
        "palettes-schemes",
        [
            "colorfilter",
            "terminal",
            "website",
            "palette",
            "shadow",
            "pencil",
            "vhs",
            "prism"
        ]
    ],
    [
        "palettes-tech",
        [
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
        ]
    ],
    ["palettes-themes", ["website"]],
    [
        "animals",
        [
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
        ]
    ],
    ["404", ["brokenlink"]],
    ["maintenance", ["bug", "github", "tools"]],
    [
        "garotadeipanemalyric",
        [
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
        ]
    ],
    [
        "omarserenoulyric",
        [
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
        ]
    ],
    ["holidays", ["sad", "superhappy", "happy"]],
    ["available-musics", ["mermaid", "bronzeando"]]
]
//$entriesArrEnd

type mapEntriesFn = ([local, iconsArr]: [string, string[]]) => [
    string,
    Set<iconKey>
]

const mapEntries: mapEntriesFn = ([local, iconsArr]) => {
    const localSet: Set<iconKey> = new Set()
    for (const iconId of iconsArr) {
        localSet.add(iconId as iconKey)
    }
    return [local, localSet]
}

const usedIcons: Map<string, Set<iconKey>> = new Map(
    Array.from(entriesArr, mapEntries)
)

type markAsUsed = (id: iconKey, local: string) => void
const markAsUsed: markAsUsed = (id, local) => {
    const prevUsed = usedIcons.get(local) || new Set()
    prevUsed.add(id)
    usedIcons.set(local, prevUsed)
    removeUsed(id)
}

const getAllUsed = () => {
    return Array.from(usedIcons.entries())
}

export { usedIcons, markAsUsed, getAllUsed }