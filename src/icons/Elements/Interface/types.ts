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
    "index",
    "listsortedascending",
    "listsorteddescending",
    "listunordered",
    "magicwand",
    "more",
    "paintbucket",
    "pencil",
    "profile",
    "shadow",
    "songlyric",
    "terminal",
    "terminalerror",
    "tools",
    "translate",
    "types.ts",
    "voicerecognition",
    "zoomin",
    "zoomout"
] as const;

type interfaceKey = (typeof interfaceArr)[number];

export type { interfaceKey };
export { interfaceArr };
