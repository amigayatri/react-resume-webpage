import { PictureAPI, APIMapping } from "../../types/animals"
import {
	formatArr,
	formatMessage,
	formatImage,
	formatGif,
	formatURL
} from "./functions"

const cat: PictureAPI = {
	link: "https://api.thecatapi.com/v1/images/search",
	format: formatArr
}
const dog: PictureAPI = {
	link: "https://dog.ceo/api/breeds/image/random",
	format: formatMessage
}

const fox: PictureAPI = {
	link: "https://randomfox.ca/floof/",
	format: formatImage
}

const rabbit: PictureAPI = {
	link: "https://api.bunnies.io/v2/loop/random/?media=gif",
	format: formatGif
}

const lizard: PictureAPI = {
	link: "https://nekos.life/api/v2/img/lizard",
	format: formatURL
}

const goose: PictureAPI = {
	link: "https://nekos.life/api/v2/img/goose",
	format: formatURL
}

const panda: PictureAPI = {
	link: "https://some-random-api.com/animal/panda",
	format: formatImage
}

const bird: PictureAPI = {
	link: "https://api.sefinek.net/api/v2/random/animal/bird",
	format: formatMessage
}

const fish: PictureAPI = {
	link: "https://api.sefinek.net/api/v2/random/animal/fish",
	format: formatMessage
}

const alpaca: PictureAPI = {
	link: "https://api.sefinek.net/api/v2/random/animal/alpaca",
	format: formatMessage
}

const redpanda: PictureAPI = {
	link: "https://some-random-api.com/animal/red_panda",
	format: formatImage
}

export const APIs: APIMapping = new Map([
	["cat", cat],
	["dog", dog],
	["fox", fox],
	["rabbit", rabbit],
	["lizard", lizard],
	["goose", goose],
	["panda", panda],
	["bird", bird],
	["fish", fish],
	["alpaca", alpaca],
	["redpanda", redpanda]
])
