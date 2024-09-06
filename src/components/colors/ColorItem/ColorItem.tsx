import { ColorTag, Wrapper, ColorSquare } from "./Styles"

export const ColorItem = (props: {code: string, remove: (code: string) => void, tagColor: string}) => {
    return <Wrapper $tagColor={props.tagColor} onClick={() => props.remove(props.code)}>
        <ColorSquare style={{backgroundColor: "#"+props.code}} />
        <ColorTag>#{props.code}</ColorTag>
    </Wrapper>
}