import { Ball, PacMan, PacManLoaderWrapper } from "./PacManLoader.styled"

export const PacManLoader = () => {
	return (
		<PacManLoaderWrapper>
			<Ball $i={0} />
			<Ball $i={1} />
			<Ball $i={2} />
			<Ball $i={3} />
			<Ball $i={4} />
			<Ball $i={5} />
			<PacMan $i={0} />
			<PacMan $i={1} />
		</PacManLoaderWrapper>
	)
}

export default PacManLoader
