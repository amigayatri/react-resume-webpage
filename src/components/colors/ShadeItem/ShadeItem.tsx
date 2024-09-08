import { Square, Wrapper, HexaCode } from "./Styles"

export const ShadeItem = (props: {inverse: string, base: boolean, code: string}) => {
    return <Wrapper>
        <Square onClick={()=>navigator.clipboard.writeText(props.code)} $base={props.base} $bg={props.code} $inverse={props.inverse}>
            <HexaCode>{props.code}</HexaCode>
        </Square>
    </Wrapper>
}