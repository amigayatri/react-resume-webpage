import { iconKey } from "../types"

//$entriesArrStart
const entriesArr: [string, string[]][] = [
    ["holidays", ["map", "calendariobrasileiro"]],
    ["cats", ["minus"]],
    ["palette", ["listunordered"]],
    ["subnav", ["more"]],
    ["error", ["terminalerror"]],
    ["icon-filter", ["filteroff"]],
    ["icon-control", ["minus"]],
    ["iconsstats", ["chart"]],
    ["detailed", ["arrow"]],
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
    ["available-musics", ["mermaid", "bronzeando"]],
    ["icons", ["egyptianwalk"]]
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

const getAllUsed = () => {
    return Array.from(usedIcons.entries())
}

type getUsedByLocal = (local: string) => iconKey[]
const getUsedByLocal: getUsedByLocal = (local) => {
    const localIcons = usedIcons.get(local)
    if (localIcons === undefined) return []
    return Array.from(localIcons.keys())
}

type getLocalSize = (local: string) => number
const getLocalSize: getLocalSize = (local) => {
    const localIcons = usedIcons.get(local)
    if (localIcons === undefined) return 0
    return localIcons.size
}

type getLocals = () => string[]
const getLocals: getLocals = () => Array.from(usedIcons.keys())

export { getAllUsed, getLocalSize, getUsedByLocal, getLocals }
