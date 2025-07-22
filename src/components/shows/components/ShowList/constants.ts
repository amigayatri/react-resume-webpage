interface idInfo {
	id: string,
	title: string,
	loveMode: boolean
}

const bbzo: idInfo = {
    id: "bbzo",
    title: "Tinhamu Bbzo!!!!",
    loveMode: true
}

const bbza: idInfo = {
    id: "bbza",
    title: "=^.^=",
    loveMode: false
}

const eric: idInfo = {
    id: "eric",
    title: "Próximos shows!",
    loveMode: false
}

const ami: idInfo = {
    id: "ami",
    title: "Próximos shows!",
    loveMode: true
}

export const emptyInfo: idInfo = {
	id: "", 
	title: "",
	loveMode: false
}

export const idsAndInfo: Map<string, idInfo> = new Map([
    ["bbzo", bbzo],
    ["bbza", bbza],
    ["eric", eric],
    ["ami", ami]
])