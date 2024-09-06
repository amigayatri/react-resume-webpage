import { Color } from "../../../lib/colors"
import { ShadeTitle, Wrapper, ShadesWrapper } from "./Styles"
import { ShadeItem } from "../ShadeItem/ShadeItem"
import { JSX } from "react/jsx-runtime"

export const ShadeSubSection = (props: {color: Color}) => {
    const generateSquares = () => {
        const squares: JSX.Element[] = []
        props.color.variations.forEach((code) => squares.push(<ShadeItem code={code} />))
        console.log(squares)
        return squares
    }
    return <Wrapper>
        <ShadeTitle>#{props.color.code}</ShadeTitle>
        <ShadesWrapper>
            {...generateSquares()}
        </ShadesWrapper>
    </Wrapper>
}