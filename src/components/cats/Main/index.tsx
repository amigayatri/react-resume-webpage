import {
	MainWrapper,
	ButtonWrapper,
	ListsWrapper,
	Button,
	ValueWrapper,
	ControlsWrapper,
	Control,
	ControlButton
} from "./Main.styled"
import AnimalAPI from "../../../api/Animals"
import { Dispatch, SetStateAction, useState } from "react"
import SVGIcon from "../../../icons/SVGIcon"
import RandomList from "../RandomList"

interface AnimalListProps {
	list: string[]
	setList: Dispatch<SetStateAction<string[]>>
	icons: string[]
}

const Main = () => {
	const api = new AnimalAPI()
	const empty: string[] = []
	const [size, setSize] = useState(256)
	const [rabbits, setRabbits] = useState(empty)
	const [dogs, setDogs] = useState(empty)
	const [cats, setCats] = useState(empty)
	const [foxes, setFoxes] = useState(empty)
	const [lizards, setLizards] = useState(empty)
	const [gooses, setGooses] = useState(empty)
	const [pandas, setPandas] = useState(empty)
	const [birds, setBirds] = useState(empty)
	const [redPanda, setRedPanda] = useState(empty)
	const lists: Map<string, AnimalListProps> = new Map([
		[
			"cat",
			{
				list: cats,
				setList: setCats,
				icons: ["egyptiancat", "cat"]
			}
		],
		[
			"dog",
			{
				list: dogs,
				setList: setDogs,
				icons: ["labrador", "sittingdog"]
			}
		],
		[
			"fox",
			{
				list: foxes,
				setList: setFoxes,
				icons: ["fox"]
			}
		],
		[
			"rabbit",
			{
				list: rabbits,
				setList: setRabbits,
				icons: ["rabbit"]
			}
		],
		[
			"lizard",
			{
				list: lizards,
				setList: setLizards,
				icons: ["gecko"]
			}
		],
		[
			"goose",
			{
				list: gooses,
				setList: setGooses,
				icons: ["goose"]
			}
		],
		[
			"panda",
			{
				list: pandas,
				setList: setPandas,
				icons: ["panda"]
			}
		],
		[
			"bird",
			{
				list: birds,
				setList: setBirds,
				icons: ["kiwibird", "egyptianbird"]
			}
		],
		[
			"redpanda",
			{
				list: redPanda,
				setList: setRedPanda,
				icons: ["badger"]
			}
		]
	])
	const handleAdd = (id: string) => {
		api.getPicture(id).then((pic) => {
			const prev = lists.get(id)
			console.log(pic)
			if (prev === undefined) return
			const prevArr = Array.from(prev.list)
			prevArr.unshift(pic)
			prev.setList(prevArr)
		})
	}
	const entries = Array.from(lists.entries())
	const plusplus = ["add", "add"]
	return (
		<MainWrapper>
			<ButtonWrapper>
				{entries.map(([id, { icons }]) => {
					return (
						<Button key={"button-animal-" + id} onClick={() => handleAdd(id)}>
							{icons.map((iconId) => (
								<SVGIcon id={iconId} size={48} />
							))}
							{plusplus.map((iconId) => (
								<SVGIcon size={32} id={iconId} />
							))}
						</Button>
					)
				})}
			</ButtonWrapper>
			<ControlsWrapper>
				<Control>
					<ControlButton
						onClick={() => {
							setSize(size - 4)
						}}
					>
						<SVGIcon size={48} id="zoomout" />
					</ControlButton>
					<ValueWrapper>{size}px</ValueWrapper>
					<ControlButton
						onClick={() => {
							setSize(size + 4)
						}}
					>
						<SVGIcon size={48} id="zoomin" />
					</ControlButton>
				</Control>
			</ControlsWrapper>
			<ListsWrapper>
				{entries.map(([id, { list, icons }]) => {
					return (
						<RandomList
							width={size}
							key={"obj-list-" + id}
							id={id}
							iconId={icons[0]}
							list={list}
						/>
					)
				})}
			</ListsWrapper>
		</MainWrapper>
	)
}

export default Main
