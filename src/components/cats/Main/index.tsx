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
	const [fishs, setFishs] = useState(empty)
	const [alpacas, setAlpacas] = useState(empty)
	const [redPandas, setRedPandas] = useState(empty)
	const [count, setCount] = useState(1)
	const [hideEmpty, setHideEmpty] = useState(false)
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
			"fish",
			{
				list: fishs,
				setList: setFishs,
				icons: ["clownfish", "flyingtrout"]
			}
		],
		[
			"alpaca",
			{
				list: alpacas,
				setList: setAlpacas,
				icons: ["alpaca"]
			}
		],
		[
			"redpanda",
			{
				list: redPandas,
				setList: setRedPandas,
				icons: ["redpanda"]
			}
		]
	])
	const handleFetch = async (id: string) => {
		const newList = []
		for (let i = 0; i < count; i++) {
			const pic = await api.getPicture(id)
			newList.push(pic)
		}
		return newList
	}
	const handleAdd = (id: string) => {
		handleFetch(id).then((newList) => {
			const prev = lists.get(id)
			if (prev === undefined) return
			const newArr = [...newList, ...Array.from(prev.list)]
			prev.setList(newArr)
		})

		const listsWrapper = document.getElementById("lists-wrapper")
		const animalList = document.getElementById(id + "-list")
		if (listsWrapper === null || animalList === null) return
		const half = listsWrapper.offsetWidth >> 1
		const newPos =
			animalList.offsetLeft < half ? 0 : animalList.offsetLeft - half
		listsWrapper.scrollLeft = newPos
	}
	const entries = Array.from(lists.entries())
	const numbers = [
		"zero",
		"one",
		"two",
		"three",
		"four",
		"five",
		"six",
		"seven",
		"eight",
		"nine"
	]
	const plusplus: { iconId: string; size: number }[] =
		count > 1
			? [
					{ iconId: "plus", size: 24 },
					{ iconId: "equal", size: 24 },
					{ iconId: numbers[count], size: 36 }
			  ]
			: [{ iconId: "plusplus", size: 48 }]
	return (
		<MainWrapper>
			<ButtonWrapper id="buttons-wrapper">
				{entries.map(([id, { icons }]) => {
					return (
						<Button
							id={id + "-button"}
							key={"button-animal-" + id}
							onClick={() => handleAdd(id)}
						>
							{icons.map((iconId) => (
								<SVGIcon key={`button-${id}-${iconId}`} id={iconId} size={48} />
							))}
							{plusplus.map(({ iconId, size }) => (
								<SVGIcon size={size} id={iconId} />
							))}
						</Button>
					)
				})}
			</ButtonWrapper>
			<ControlsWrapper>
				<Control>
					<ControlButton
						$isDisabled={count === 1}
						onClick={() => {
							if (count === 1) return
							setCount(count - 1)
						}}
					>
						<SVGIcon size={48} id={"minus"} />
					</ControlButton>
					<ControlButton
						$isDisabled={count === 8}
						onClick={() => {
							if (count === 8) return
							setCount(count + 1)
						}}
					>
						<SVGIcon size={48} id="plus" />
					</ControlButton>
				</Control>
				<Control>
					<ControlButton
						onClick={() => {
							setSize(size - 8)
						}}
					>
						<SVGIcon size={48} id="zoomout" />
					</ControlButton>
					<ValueWrapper>{size}px</ValueWrapper>
					<ControlButton
						onClick={() => {
							setSize(size + 8)
						}}
					>
						<SVGIcon size={48} id="zoomin" />
					</ControlButton>
				</Control>
				<Control>
					<ControlButton
						$isDisabled={hideEmpty === true}
						onClick={() => setHideEmpty(!hideEmpty)}
					>
						<SVGIcon size={48} id="eyeclose" />
					</ControlButton>
					<ValueWrapper>
						<SVGIcon size={48} id="empty" />
					</ValueWrapper>
					<ControlButton
						$isDisabled={hideEmpty === false}
						onClick={() => setHideEmpty(!hideEmpty)}
					>
						<SVGIcon size={48} id="eye" />
					</ControlButton>
				</Control>
			</ControlsWrapper>
			<ListsWrapper id="lists-wrapper">
				{entries.map(([id, { list, icons }]) => {
					if (hideEmpty && list.length === 0) return
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
