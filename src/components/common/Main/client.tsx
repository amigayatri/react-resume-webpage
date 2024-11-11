"use client"

import { MainBase } from "./MainBase.tsx"
import { MainProps } from "./index.tsx"

export function Main({ lng, children }: MainProps) {
	return <MainBase children={children} lng={lng} />
}
