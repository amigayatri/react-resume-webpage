import { MainWrapper } from "./Main.styled"
import { useEffect, useState } from "react"
import useGetLeetCodeData from "../../../hooks/useGetLeetCodeData"
import useFormatData from "../../../hooks/useFormatData"
import Profile from "../Profile"
import Questions from "../Questions"

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
	return (
		<MainWrapper>
			<Profile name="Amira Gayatri" profile={data.profile} />
			<Questions questions={data.questions} />
		</MainWrapper>
	)
}

export default Main
