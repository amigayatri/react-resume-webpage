export type getAnimal = () => Promise<string>
export type getPictureType = (id: string) => Promise<string>
interface RawResponseProps {
	message?: string
	image?: string
	media?: { gif: string }
	url?: string
}
interface RawResponseProps extends Array<{ url: string }> {}
export type formatType = (rawData: RawResponseProps) => string

export interface PictureAPI {
	link: string
	format: formatType
}
export type APIMapping = Map<string, PictureAPI>
export interface AnimalAPIProps {
	getPicture: getPictureType
}
