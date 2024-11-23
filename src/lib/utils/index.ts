type capitalize = (str: string) => string
const capitalize: capitalize = (str) => {
	const [firstChar] = str
	const sub = str.substring(1)
	return `${firstChar.toUpperCase()}${sub}`
}
export { capitalize }
