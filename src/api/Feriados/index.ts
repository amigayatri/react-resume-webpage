import Holiday from "../../types/HolidayProps"

interface RawHoliday {
	type: string
	date: string
	name: string
}

class BrazilianHolidaysAPI {
	link: string
	national: Holiday[]
	constructor() {
		const year = new Date().getFullYear()
		this.national = []
		this.link = "https://brasilapi.com.br/api/feriados/v1/" + year
	}

	setList(rawList: RawHoliday[]) {
		const now = new Date()
		const currMonth = now.getUTCMonth()
		const currDay = now.getUTCDate()
		for (const raw of rawList) {
			console.log(raw.date)
			const holiday = new Date(raw.date + "GMT-3")
			const holidayMonth = holiday.getUTCMonth()
			const holidayDate = holiday.getUTCDate()
			if (
				holidayMonth > currMonth ||
				(holidayMonth === currMonth && holidayDate >= currDay)
			) {
				const holidayObj: Holiday = {
					date: holiday,
					name: raw.name,
					type: raw.type
				}
				this.national.push(holidayObj)
			}
		}
		return this.national
	}

	getList = async () => {
		if (this.national.length === 0) {
			const response = await fetch(this.link)
			const list = await response.json()
			const formatted = this.setList(list)
			return formatted
		} else {
			return this.national
		}
	}
}
export default BrazilianHolidaysAPI
