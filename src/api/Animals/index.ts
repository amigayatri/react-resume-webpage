class AnimalAPI {
	mapping: Map<string, () => Promise<string>>
	constructor() {
		this.mapping = new Map([
			["cat", this.getCat],
			["dog", this.getDog],
			["fox", this.getFox],
			["rabbit", this.getRabbit],
			["lizard", this.getLizard],
			["goose", this.getGoose],
			["panda", this.getPanda],
			["bird", this.getBird],
			["fish", this.getFish],
			["alpaca", this.getAlpaca],
			["redpanda", this.getRedPanda]
		])
	}

	getCat: () => Promise<string> = async () => {
		const response = await fetch("https://api.thecatapi.com/v1/images/search")
		const body = await response.json()
		return body[0].url
	}

	getDog: () => Promise<string> = async () => {
		const response = await fetch("https://dog.ceo/api/breeds/image/random")
		const body = await response.json()
		return body.message
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
		return body.media.gif
	}

	getLizard: () => Promise<string> = async () => {
		const response = await fetch("https://nekos.life/api/v2/img/lizard")
		const body = await response.json()
		return body.url
	}

	getGoose: () => Promise<string> = async () => {
		const response = await fetch("https://nekos.life/api/v2/img/goose")
		const body = await response.json()
		return body.url
	}

	getPanda: () => Promise<string> = async () => {
		const response = await fetch("https://some-random-api.com/animal/panda")
		const body = await response.json()
		return body.image
	}

	getBird: () => Promise<string> = async () => {
		const response = await fetch(
			"https://api.sefinek.net/api/v2/random/animal/bird"
		)
		const body = await response.json()
		return body.message
	}

	getFish: () => Promise<string> = async () => {
		const response = await fetch(
			"https://api.sefinek.net/api/v2/random/animal/fish"
		)
		const body = await response.json()
		return body.message
	}

	getAlpaca: () => Promise<string> = async () => {
		const response = await fetch(
			"https://api.sefinek.net/api/v2/random/animal/alpaca"
		)
		const body = await response.json()
		return body.message
	}
	getRedPanda: () => Promise<string> = async () => {
		const response = await fetch("https://some-random-api.com/animal/red_panda")
		const body = await response.json()
		return body.image
	}

	getPicture = async (id: string) => {
		const fn = this.mapping.get(id)
		if (fn === undefined) return ""
		return fn()
	}
}
export default AnimalAPI
