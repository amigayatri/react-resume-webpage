import { useTranslation } from "../../../../../i18n/"
import { PasswordProps } from "../../types"
import { PasswordBase } from "./PasswordBase"

export const Password = async (props: PasswordProps) => {
    const { lng } = props
    const { t } = await useTranslation(lng, "resume")
    return <PasswordBase t={t} {...props} />
}
