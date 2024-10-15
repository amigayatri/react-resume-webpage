import { SplineSceneWrapper } from "./SplineScene.styled"
import React, { Suspense } from "react"
import PacManLoader from "../../common/Loading/PacManLoader"

const Spline = React.lazy(() => import("@splinetool/react-spline"))

const SplineScene = () => {
	return (
		<SplineSceneWrapper>
			<Suspense fallback={<PacManLoader />}>
				<Spline scene="https://prod.spline.design/Cx-wUCggVk8d8UIs/scene.splinecode" />
			</Suspense>
		</SplineSceneWrapper>
	)
}

export default SplineScene
