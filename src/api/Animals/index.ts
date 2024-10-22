class AnimalAPI {
	mapping: Map<string, any>
	constructor() {
		this.mapping = new Map([
			["cat", this.getCat],
			["dog", this.getDog],
			["fox", this.getFox],
			["rabbit", this.getRabbit]
		])
	}

	getCat: () => Promise<string> = async () => {
		const response = await fetch("https://api.thecatapi.com/v1/images/search")
		const body = await response.json()
		return body[0].url
	}

	getDog: () => Promise<string> = async () => {
		const response = await fetch("https://random.dog/woof.json")
		const body = await response.json()
		return body.url
	}

	getFox: () => Promise<string> = async () => {
		const response = await fetch("https://randomfox.ca/floof/")
		const body = await response.json()
		return body.image
	}

	getRabbit: () => Promise<string> = async () => {
		const response = await fetch(
			"https://api.bunnies.io/v2/loop/random/?media=gif"
		)
		const body = await response.json()
		console.log(body)
		return body.media.gif
	}

	getPicture = async (id: string) => {
		const fn = this.mapping.get(id)
		if (fn === undefined) return ""
		return fn()
	}
}
export default AnimalAPI
