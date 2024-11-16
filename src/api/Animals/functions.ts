import { formatFn } from "../../types/animals"

export const formatArr: formatFn = (raw) => {
	if (!Array.isArray(raw)) return ""
	return raw[0].url
}
export const formatMessage: formatFn = (raw) => {
	if (raw.message === undefined) return ""
	return raw.message
}
export const formatImage: formatFn = (raw) => {
	if (raw.image === undefined) return ""
	return raw.image
}
export const formatGif: formatFn = (raw) => {
	if (raw.media === undefined) return ""
	return raw.media.gif
}
export const formatURL: formatFn = (raw) => {
	if (raw.url === undefined) return ""
	return raw.url
}
