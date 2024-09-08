import { ColorTag, Wrapper, ColorSquare } from "./Styles"

export const ColorItem = (props: {code: string, remove: (code: string) => void, border: string}) => {
    return <Wrapper $border={props.border} onClick={() => props.remove(props.code)}>
        <ColorSquare $code={props.code} />
        <ColorTag $code={props.code}>{props.code}</ColorTag>
    </Wrapper>
}