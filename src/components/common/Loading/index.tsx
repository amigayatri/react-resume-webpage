import { LoadingWrapper } from "./Loading.styled"
import PacManLoader from "./PacManLoader"

type loadingType = "pacman"

interface LoadingProps {
	type: loadingType
	notFullPage?: boolean
}

export const Loading = ({ type, notFullPage }: LoadingProps) => {
	if (type === "pacman") {
		return (
			<LoadingWrapper $fullPage={notFullPage !== true}>
				<PacManLoader />
			</LoadingWrapper>
		)
	}
}

export default Loading
