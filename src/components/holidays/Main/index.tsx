import { useEffect, useState } from "react"
import { MainWrapper } from "./Main.styled"
import BrazilianHolidaysAPI from "../../../api/Feriados"
import Holiday from "../../../types/HolidayProps"
import HolidayList from "../HolidayList"

const Main = () => {
	const empty: Holiday[] = []
	const [list, setList] = useState(empty)
	useEffect(() => {
		const api = new BrazilianHolidaysAPI()
		api.getList().then((list) => setList(list))
	}, [])
	return (
		<MainWrapper>
			<HolidayList list={list} />
		</MainWrapper>
	)
}

export default Main
