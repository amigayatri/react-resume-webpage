class AnimalAPI {
	constructor() {}

	getCat = async () => {
		const response = await fetch("https://api.thecatapi.com/v1/images/search")
		const body = await response.json()
		return body[0].url
	}

	getDog = async () => {
		const response = await fetch("https://random.dog/woof.json")
		const body = await response.json()
		return body.url
	}

	getFox = async () => {
		const response = await fetch("https://randomfox.ca/floof/")
		const body = await response.json()
		return body.image
	}
}
export default AnimalAPI
