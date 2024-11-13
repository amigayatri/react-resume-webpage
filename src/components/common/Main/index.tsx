import { ElementProps } from "../../../types/common/"
import { MainBase } from "./MainBase.tsx"
import { ReactElement } from "react"

export interface MainProps extends ElementProps {
	children: (ReactElement | string)[] | ReactElement | string
}

export const Main = async ({ lng, children }: MainProps) => {
	return <MainBase children={children} lng={lng} />
}
