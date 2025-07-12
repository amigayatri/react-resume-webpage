import { useWindowSize } from "@uidotdev/usehooks"
import { useEffect, useState } from "react"
import { Controls, Hero, Icon } from "../"
import { useMyRouter } from "../../../../hooks/"
import { MulticoloredName } from "../../../common/client"
import { SectionTitle } from "../Common.styled.ts"
import { getColorByIdx, getGroupInfo, getNumberOfColumns } from "../functions.ts"
import { IconListBaseProps } from "../types.ts"
import { Disclaimer, IconListWrapper, List } from "./IconList.styled"

const startInfo = getGroupInfo("")

export const IconListBase = ({ lng, t }: IconListBaseProps) => {
    const [currIcons, setCurrIcons] = useState(startInfo.newIcons)
    const [title, setTitle] = useState(startInfo.newTitle.key)
    const [size, setSize] = useState(0)
    const [columns, setColumns] = useState(0)

    const myRouter = useMyRouter()

    const handleGroupChange = (group: string) => {
        if (group === "all") {
            myRouter.params.delete("group")
        } else {
            myRouter.params.set("group", group)
        }
        myRouter.update()
        const { newIcons, newTitle } = getGroupInfo(group)
        setCurrIcons(newIcons)
        const { key, tOptions } = newTitle
        setTitle(t(key, tOptions))
    }

    const getParams = () => {
        return {
            size: Number(myRouter.params.get("size")) || 48,
            group: myRouter.params.get("group") || "all"
        }
    }

    const handleSize = (newSize: number) => {
        myRouter.params.set("size", newSize.toString())
        myRouter.update()
        setSize(newSize)
        handleCols()
    }

    const windowSize = useWindowSize()

    const handleCols = () => {
        setColumns(getNumberOfColumns(windowSize, size))
    }

    useEffect(() => {
        handleCols()
    }, [windowSize.width, size])

    useEffect(() => {
        const paramsInfo = getParams()
        setSize(paramsInfo.size)
        handleCols()
        handleGroupChange(paramsInfo.group)
    }, [])

    return (
        <>
            <Hero currIcons={currIcons} lng={lng} />
            <IconListWrapper>
                <SectionTitle>
                    <MulticoloredName
                        local="icons"
                        info={{ group: "rainbow", name: "rainbow monokai" }}
                        fontSize={20}
                        legible
                        lng={lng}
                    >
                        {title}
                    </MulticoloredName>
                </SectionTitle>
                <Controls size={size} handleSize={handleSize} handleGroups={handleGroupChange} lng={lng} />
                {currIcons.length === 0 ?
                    <Disclaimer>Sem ícones nessa categoria</Disclaimer>
                :   <List id="icon-list-wrapper" $cols={columns} $size={size}>
                        {currIcons.map((id, idx) => (
                            <Icon
                                key={"icon-with-id-" + id}
                                t={t}
                                lng={lng}
                                info={{
                                    id,
                                    size,
                                    color: getColorByIdx(idx)
                                }}
                            />
                        ))}
                    </List>
                }
            </IconListWrapper>
        </>
    )
}
