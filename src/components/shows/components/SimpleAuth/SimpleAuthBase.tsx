import { useEffect, useState } from "react"
import { ShowList } from "../"
import { useMyRouter } from "../../../../hooks"
import { Loading } from "../../../common"
import { SimpleAuthBaseProps } from "../types"
import { emptyInfo, idsAndInfo } from "./constants"

export const SimpleAuthBase = ({ lng }: SimpleAuthBaseProps) => {
    const myRouter = useMyRouter()
    const [info, setInfo] = useState(emptyInfo)
    
    const {id, title, loveMode} = info

    useEffect(() => {
        const paramId = myRouter.params.get("id") || ""
        const userInfo = idsAndInfo.get(paramId)
        if (userInfo === undefined) {
            myRouter.router.push(`/${lng}`)
            return
        }
        setInfo(userInfo)
    }, [])

    if (id === "") {
        return <Loading type="pacman" />
    }

    return <ShowList title={title} lng={lng} loveMode={loveMode} />
}
