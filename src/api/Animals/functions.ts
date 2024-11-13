import { formatType } from "../../types/animals"

export const formatArr: formatType = (raw) => {
	if (!Array.isArray(raw)) return ""
	return raw[0].url
}
export const formatMessage: formatType = (raw) => {
	if (raw.message === undefined) return ""
	return raw.message
}
export const formatImage: formatType = (raw) => {
	if (raw.image === undefined) return ""
	return raw.image
}
export const formatGif: formatType = (raw) => {
	if (raw.media === undefined) return ""
	return raw.media.gif
}
export const formatURL: formatType = (raw) => {
	if (raw.url === undefined) return ""
	return raw.url
}
