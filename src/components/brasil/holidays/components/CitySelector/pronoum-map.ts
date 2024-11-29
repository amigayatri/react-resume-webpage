type statePossessivePronouns = "neutral" | "feminine" | "masculine" | ""

type pronoumSet = Set<string>
const masculine: pronoumSet = new Set([
	"ac",
	"ap",
	"am",
	"ce",
	"df",
	"es",
	"ma",
	"pa",
	"pr",
	"pi",
	"to",
	"rj",
	"rn",
	"rs"
])
const feminine: pronoumSet = new Set(["ba", "pa"])
const neutral: pronoumSet = new Set([
	"al",
	"go",
	"mt",
	"ms",
	"mg",
	"pe",
	"ro",
	"rr",
	"sc",
	"sp",
	"se"
])

type getPronouns = (state: string) => statePossessivePronouns

const getPronouns: getPronouns = (state) => {
	const lowercase = Array.from(state).join("").toLowerCase()
	if (masculine.has(lowercase)) return "masculine"
	if (neutral.has(lowercase)) return "neutral"
	if (feminine.has(lowercase)) return "feminine"
	return ""
}

export { getPronouns }
