import { LoadingWrapper } from "./Loading.styled"
import PacManLoader from "./PacManLoader"

export const Loading = ({ type }: { type: string }) => {
	if (type === "pacman") {
		return (
			<LoadingWrapper>
				<PacManLoader />
			</LoadingWrapper>
		)
	}
	return (
		<LoadingWrapper>
			<h1>Loading component</h1>
		</LoadingWrapper>
	)
}

export default Loading
