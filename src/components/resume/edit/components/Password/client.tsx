"use client"

import { useTranslation } from "../../../../../i18n/client"
import { PasswordProps } from "../../types"
import { PasswordBase } from "./PasswordBase"

export const Password = (props: PasswordProps) => {
    const { lng } = props
    const { t } = useTranslation(lng, "resume")
    return <PasswordBase t={t} {...props} />
}
