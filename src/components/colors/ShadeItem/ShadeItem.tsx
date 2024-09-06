import { Square } from "./Styles"

export const ShadeItem = (props: {code: string}) => {
    return <Square style={{backgroundColor: props.code}}/>
}