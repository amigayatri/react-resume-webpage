"use client"

import { useState } from "react"
import { ElementProps } from "../../../../types/common"
import { Password } from "../components"
import { MainWrapper } from "./Main.styled"

export const Main = ({ lng }: ElementProps) => {
    const [rightPassword, setRightPassword] = useState(false)
    if (!rightPassword) {
        return (
            <MainWrapper>
                <Password lng={lng} setRightPassword={() => setRightPassword(!rightPassword)} />
            </MainWrapper>
        )
    }
    return (
        <MainWrapper>
            <span>editing</span>
        </MainWrapper>
    )
}
