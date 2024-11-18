export type animalKey =
	| "cat"
	| "dog"
	| "fox"
	| "rabbit"
	| "lizard"
	| "goose"
	| "panda"
	| "bird"
	| "fish"
	| "alpaca"
	| "redpanda"

export type getAnimal = () => Promise<string>
export type getPictureFn = (id: animalKey) => Promise<string>
interface RawResponseProps {
	message?: string
	image?: string
	media?: { gif: string }
	url?: string
}
interface RawResponseProps extends Array<{ url: string }> {}
export type formatFn = (rawData: RawResponseProps) => string

export interface PictureAPI {
	link: string
	format: formatFn
}
export type APIMapping = Map<animalKey, PictureAPI>
export interface AnimalAPIProps {
	getPicture: getPictureFn
}
