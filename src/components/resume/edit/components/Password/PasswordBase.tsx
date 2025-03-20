import { useState } from "react"
import { PasswordBaseProps } from "../../types"
import { Field, Wrapper } from "./Password.styled"

const rightVal = "8991"
const empty: string[] = []

export const PasswordBase = ({ setRightPassword }: PasswordBaseProps) => {
    const [currVal, setCurrVal] = useState(empty)
    const handleChange = (idx: number, newVal: string) => {
        if (newVal.length > 1) return
        if (newVal === "" && idx >= currVal.length) return
        else if (newVal === "") {
            const copy = Array.from(currVal).filter((val) => val !== "")
            copy[idx] = ""
            setCurrVal(copy)
        } else {
            const copy = Array.from([...currVal, newVal]).filter((val) => val !== "")
            setCurrVal(copy)
            const asStr = copy.join("").toString()
            if (asStr === rightVal) {
                setRightPassword()
            }
        }
    }
    const createField = (idx: number) => {
        return (
            <Field
                onChange={({ target }) => handleChange(idx, target.value)}
                type="password"
                key={"password-digit-" + idx}
                size={1}
            />
        )
    }
    const asArr = rightVal.split("")

    return <Wrapper>{asArr.map((_, idx) => createField(idx))}</Wrapper>
}
