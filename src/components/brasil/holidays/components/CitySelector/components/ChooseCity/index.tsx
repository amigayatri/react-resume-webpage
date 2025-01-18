import { Selectors } from "./ChooseCity.styled"
import { ChooseCityProps } from "../types"
import { Select } from "../../../../../../common/client"
import { useEffect, useState } from "react"
import { brasilIconID, selectCommonProps, unsetValue } from "./constants"
import {
	emptyOptions,
	getCityOptions,
	getCurrIcon,
	getStateOptions
} from "../functions"

export const ChooseCity = ({
	cityPair,
	statePair,
	t,
	lng
}: ChooseCityProps) => {
	const [city, setCity] = cityPair
	const [state, setState] = statePair

	const [currIcon, setCurrIcon] = useState(brasilIconID)
	const [stateOptions, setStateOptions] = useState(emptyOptions)
	const [citiesOptions, setCitiesOptions] = useState(emptyOptions)

	useEffect(() => {
		const stateOp = getStateOptions()
		setStateOptions(stateOp)
	}, [])

	useEffect(() => {
		setCitiesOptions(emptyOptions)
		getCityOptions(state).then((newOptions) => {
			setCitiesOptions(newOptions)
			setCurrIcon(getCurrIcon(state))
		})
	}, [state])

	return (
		<Selectors>
			<Select
				options={stateOptions}
				id="holidays-state"
				label={t("select.labels.state")}
				defaultValue={state}
				onSelectChange={({ target }) => {
					setState(target.value)
					setCity(unsetValue)
				}}
				iconId="brasil"
				lng={lng}
				{...selectCommonProps}
			/>
			<Select
				options={citiesOptions}
				id="holidays-city"
				label={t("select.labels.city")}
				defaultValue={city}
				onSelectChange={({ target }) => {
					setCity(target.value)
				}}
				iconId={currIcon}
				lng={lng}
				{...selectCommonProps}
			/>
		</Selectors>
	)
}
