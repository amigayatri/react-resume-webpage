import { CitySelectorProps } from "../../types.ts"
import { useEffect, useState } from "react"
import {
	Button,
	OpenText,
	CitySelectorWrapper,
	CitiesWrapper,
	Selectors
} from "./CitySelector.styled.ts"
import { SVGIcon } from "../../../../common/client"
import { Select } from "../../../../common/client"
import {
	getStateOptions,
	emptyOptions,
	getCityOptions,
	getCurrIcon,
	brasilIconID,
	getNewHolidays
} from "./functions.ts"

export const CitySelector = ({
	t,
	lng,
	thisYearState,
	nextYearState
}: CitySelectorProps) => {
	const [selectedState, setSelectedState] = useState("_")
	const [selectedCity, setSelectedCity] = useState("_")
	const [currIcon, setCurrIcon] = useState(brasilIconID)
	const [present] = useState(new Map())

	const [open, setOpen] = useState(false)
	const [thisYear, setThisYear] = thisYearState
	const [nextYear, setNextYear] = nextYearState
	const [stateOptions, setStateOptions] = useState(emptyOptions)
	const [citiesOptions, setCitiesOptions] = useState(emptyOptions)

	const handleAdd = () => {
		present.set(selectedCity + "-" + selectedState, [])
		getNewHolidays(selectedState, selectedCity).then((newHolidays) => {
			const currListThisYear = [...thisYear, ...newHolidays.thisYear]
			const currListNextYear = [...nextYear, ...newHolidays.nextYear]
			setThisYear(currListThisYear)
			setNextYear(currListNextYear)
		})
		setOpen(false)
	}

	useEffect(() => {
		const stateOp = getStateOptions()
		setStateOptions(stateOp)
	}, [])

	useEffect(() => {
		setCitiesOptions(emptyOptions)
		getCityOptions(selectedState).then((newOptions) => {
			setCitiesOptions(newOptions)
			setCurrIcon(getCurrIcon(selectedState))
		})
	}, [selectedState])

	const selectCommonProps = {
		local: "holidays",
		namespace: "holidays",
		noTranslation: true,
		onHeader: false,
		lng,
		fontSize: 1.25
	}

	return (
		<CitySelectorWrapper>
			<Button onClick={() => setOpen(!open)}>
				<SVGIcon lng={lng} local="holidays" size={32} id="map" />
				<OpenText>{t(`open.${open}`)}</OpenText>
			</Button>
			<CitiesWrapper $isOpen={open}>
				<Selectors>
					<Select
						options={stateOptions}
						id="holidays-state"
						label={t("select.labels.state")}
						defaultValue={selectedState}
						onSelectChange={({ target }) => {
							setSelectedState(target.value)
							setSelectedCity("_")
						}}
						iconId="brasil"
						{...selectCommonProps}
					/>
					<Select
						options={citiesOptions}
						id="holidays-city"
						label={t("select.labels.city")}
						defaultValue={selectedCity}
						onSelectChange={({ target }) => {
							setSelectedCity(target.value)
						}}
						iconId={currIcon}
						{...selectCommonProps}
					/>
				</Selectors>
				{selectedCity !== "_" && (
					<Button onClick={() => handleAdd()}>
						<SVGIcon
							lng={lng}
							local="holidays"
							size={32}
							id="calendar"
						/>
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
