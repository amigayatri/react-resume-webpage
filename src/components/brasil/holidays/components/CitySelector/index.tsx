import { CitySelectorProps, emptyStates } from "../../types.ts"
import { useEffect, useState } from "react"
import {
	Button,
	OpenText,
	Selector,
	Option,
	CitySelectorWrapper,
	CitiesWrapper,
	SelectorWrapper,
	Selectors,
	Label
} from "./CitySelector.styled.ts"
import { SVGIcon } from "../../../../common/client"
import BrazilianAPI from "../../../../../api/Brazil/"

export const CitySelector = ({
	t,
	lng,
	thisYear,
	nextYear,
	setNextYear,
	setThisYear
}: CitySelectorProps) => {
	const emptyStates: emptyStates = []
	const [states, setStates] = useState(emptyStates)
	const emptyCities: string[] = []
	const [cities, setCities] = useState(emptyCities)
	const [selectedState, setSelectedState] = useState("")
	const [selectedCity, setSelectedCity] = useState("")
	const [present, _] = useState(new Map())
	const api = new BrazilianAPI()
	const [open, setOpen] = useState(false)
	const handleAdd = () => {
		present.set(selectedCity + "-" + selectedState, [])
		api
			.getMunicipalHolidays(selectedState, selectedCity)
			.then((cityHolidays) => {
				if (cityHolidays !== undefined) {
					const currYear = new Date().getFullYear()
					const currListThisYear = Array.from(thisYear)
					const currListNextYear = Array.from(nextYear)
					for (const holiday of cityHolidays) {
						if (holiday.date.getFullYear() === currYear) {
							currListThisYear.push(holiday)
						} else {
							currListNextYear.push(holiday)
						}
					}
					setThisYear(currListThisYear)
					setNextYear(currListNextYear)
				}
			})
		setOpen(false)
	}
	useEffect(() => {
		api.getStates().then((states) => {
			states.sort((a, b) => a.name.localeCompare(b.name))
			setStates(states)
		})
	}, [])
	useEffect(() => {
		api.getCities(selectedState).then((cities) => {
			if (cities !== undefined) {
				cities.sort((a, b) => a.localeCompare(b))
				setCities(cities)
			}
		})
	}, [selectedState])
	const stateOptions = new Set()
	return (
		<CitySelectorWrapper>
			<Button onClick={() => setOpen(!open)}>
				<SVGIcon lng={lng} local="holidays" size={32} id="map" />
				<OpenText>{t(`open.${open}`)}</OpenText>
			</Button>
			<CitiesWrapper $isOpen={open}>
				<Selectors>
					<SelectorWrapper>
						<Label>{t("labels.state")}</Label>
						<Selector
							defaultValue={selectedState}
							onChange={({ target }) => {
								setSelectedState(target.value)
								setSelectedCity("")
							}}
						>
							<Option value={""}></Option>
							{states.map(({ name, twoLetters }) => {
								if (stateOptions.has(twoLetters)) return
								stateOptions.add(twoLetters)
								return (
									<Option key={twoLetters + "-option"} value={twoLetters}>
										{name}
									</Option>
								)
							})}
						</Selector>
					</SelectorWrapper>
					<SelectorWrapper>
						<Label>{t("labels.city")}</Label>
						<Selector
							defaultValue={selectedCity}
							onChange={({ target }) => setSelectedCity(target.value)}
						>
							<Option value={""}></Option>
							{cities.map((name) => (
								<Option value={name} key={name}>
									{name}
								</Option>
							))}
						</Selector>
					</SelectorWrapper>
				</Selectors>
				{selectedCity !== "" && (
					<Button onClick={() => handleAdd()}>
						<SVGIcon lng={lng} local="holidays" size={32} id="calendar" />
						<OpenText>
							{t("addMunicipal", {
								stateName: selectedState,
								cityName: selectedCity
							})}
						</OpenText>
					</Button>
				)}
			</CitiesWrapper>
		</CitySelectorWrapper>
	)
}