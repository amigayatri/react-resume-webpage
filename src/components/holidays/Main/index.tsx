import { useEffect, useState } from "react"
import {
	MainWrapper,
	Title,
	List,
	ListWrapper,
	Button,
	OpenText,
	Selector,
	Option,
	CitySelectorWrapper,
	CitiesWrapper,
	SelectorWrapper,
	Selectors,
	Label
} from "./Main.styled"
import BrazilianAPI from "../../../api/Brazil"
import Holiday from "../../../types/HolidayProps"
import StateProps from "../../../types/StateProps"
import HolidayList from "../HolidayList"
import { useTranslation } from "react-i18next"
import { Tab, TabPanel } from "react-tabs"
import SVGIcon from "../../../icons/SVGIcon"
import VisualDescription from "../VisualDescription"
import MulticoloredName from "../../common/MulticoloredName"

const Main = () => {
	const { t } = useTranslation()
	const empty: Holiday[] = []
	const [thisYear, setThisYear] = useState(empty)
	const [nextYear, setNextYear] = useState(empty)
	const emptyStates: StateProps[] = []
	const [states, setStates] = useState(emptyStates)
	const emptyCities: string[] = []
	const [cities, setCities] = useState(emptyCities)
	const [selectedState, setSelectedState] = useState("SP")
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
		const api = new BrazilianAPI()
		api.getNationalHolidays().then((list) => {
			const byYear = new Map()
			const currYear = new Date().getFullYear()
			for (const holiday of list) {
				const holidayYear = holiday.date.getFullYear()
				const prevArr = byYear.has(holidayYear) ? byYear.get(holidayYear) : []
				prevArr.push(holiday)
				byYear.set(holidayYear, prevArr)
			}
			setThisYear(byYear.get(currYear))
			setNextYear(byYear.get(currYear + 1))
		})
		api.getStates().then((states) => {
			states.sort((a, b) => a.name.localeCompare(b.name))
			setStates(states)
		})
		api.getCities(selectedState).then((cities) => {
			if (cities !== undefined) {
				cities.sort((a, b) => a.localeCompare(b))
				setCities(cities)
			}
		})
	}, [selectedState])
	return (
		<MainWrapper>
			<Title>
				<MulticoloredName
					fontSize={32}
					iconId="braziliancalendar"
					legible
					info={{ group: "rainbow", name: "rainbow monokai" }}
				>
					{t("brazilianHolidays.title")}
				</MulticoloredName>
			</Title>
			<VisualDescription />
			<ListWrapper>
				<CitySelectorWrapper>
					<Button onClick={() => setOpen(!open)}>
						<SVGIcon local="holidays" size={32} id="map" />
						<OpenText>{t(`brazilianHolidays.open.${open}`)}</OpenText>
					</Button>
					<CitiesWrapper $isOpen={open}>
						<Selectors>
							<SelectorWrapper>
								<Label>{t("brazilianHolidays.labels.state")}</Label>
								<Selector
									onChange={({ target }) => {
										setSelectedState(target.value)
										setSelectedCity("")
									}}
								>
									{states.map(({ name, twoLetters }) => (
										<Option
											selected={twoLetters === selectedState}
											key={twoLetters + "-option"}
											value={twoLetters}
										>
											{name}
										</Option>
									))}
								</Selector>
							</SelectorWrapper>
							<SelectorWrapper>
								<Label>{t("brazilianHolidays.labels.city")}</Label>
								<Selector
									onChange={({ target }) => setSelectedCity(target.value)}
								>
									<Option value={""} disabled selected></Option>
									{cities.map((name) => (
										<Option selected={name === selectedCity} key={name}>
											{name}
										</Option>
									))}
								</Selector>
							</SelectorWrapper>
						</Selectors>
						{selectedCity !== "" && (
							<Button onClick={() => handleAdd()}>
								<SVGIcon local="holidays" size={32} id="calendar" />
								<OpenText>
									{t("brazilianHolidays.addMunicipal", {
										stateName: selectedState,
										cityName: selectedCity
									})}
								</OpenText>
							</Button>
						)}
					</CitiesWrapper>
				</CitySelectorWrapper>
				<List>
					<Tab tabIndex="0">{t("brazilianHolidays.tabs.this")}</Tab>
					<Tab tabIndex="0">{t("brazilianHolidays.tabs.next")}</Tab>
				</List>
				<TabPanel>
					<HolidayList list={thisYear} />
				</TabPanel>
				<TabPanel>
					<HolidayList list={nextYear} />
				</TabPanel>
			</ListWrapper>
		</MainWrapper>
	)
}

export default Main
