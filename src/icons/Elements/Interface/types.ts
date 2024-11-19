const interfaceArr = [
    "brokenlink",
    "calendar",
    "chart",
    "colorfilter",
    "copy",
    "download",
    "email",
    "error",
    "external",
    "eyeclose",
    "eyeopen",
    "filter",
    "grid",
    "home",
    "listsortedascending",
    "listsorteddescending",
    "listunordered",
    "magicwand",
    "more",
    "paintbucket",
    "pencil",
    "profile",
    "shadow",
    "terminalerror",
    "terminal",
    "tools",
    "translate",
    "voicerecognition",
    "zoomin",
    "zoomout"
] as const

type interfaceKey = (typeof interfaceArr)[number]

export type { interfaceKey }
export { interfaceArr }