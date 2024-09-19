import { Color } from "../../../lib/colors"
import { ShadeTitle, Wrapper, ShadesWrapper } from "./Styles"
import { ShadeItem } from "../ShadeItem/ShadeItem"
import { JSX } from "react/jsx-runtime"

export const ShadeSubSection = (props: {color: Color}) => {
    const generateSquares = () => {
        const squares: JSX.Element[] = []
        props.color.variations.forEach(({code, inverse}) => squares.push(<ShadeItem key={'base:'+props.color.code+'shade:'+code} inverse={inverse} base={code == props.color.code} code={code} />))
        return squares
    }
    return <Wrapper>
        <ShadeTitle>{props.color.code}</ShadeTitle>
        <ShadesWrapper>
            {...generateSquares()}
        </ShadesWrapper>
    </Wrapper>
}