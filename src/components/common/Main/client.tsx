"use client"

import { MainBase } from "./MainBase.tsx"
import { MainProps } from "./"

export function Main({ lng, children }: MainProps) {
	return <MainBase children={children} lng={lng} />
}
