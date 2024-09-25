import { MainWrapper } from "./Main.styled"
import { useEffect, useState } from "react"
import useGetLeetCodeData from "../../../hooks/useGetLeetCodeData"
import useFormatData from "../../../hooks/useFormatData"
import Profile from "../Profile"
import Questions from "../Questions"
import Loading from "../../common/Loading"
import HeatMap from "../HeatMap"

interface MainProps {
	user: string
}

const Main = ({ user }: MainProps) => {
	const [data, setData] = useState(useFormatData(user, null))
	useEffect(() => {
		useGetLeetCodeData(user).then((response) => {
			setData(useFormatData(user, response))
		})
	}, [])
	if (data.profile.ranking === -1)
		return (
			<MainWrapper>
				<Loading type="pacman" />
			</MainWrapper>
		)
	return (
		<MainWrapper>
			<Profile name="Amira Gayatri" profile={data.profile} />
			<Questions questions={data.questions} />
			<HeatMap calendar={data.calendar} />
		</MainWrapper>
	)
}

export default Main
