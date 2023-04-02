import { SpanStyle } from "./styles"

const ButtonPrev: React.FC<{children: string}> = (props) => {
    return (
        <SpanStyle>{props.children}</SpanStyle>
    )
}

export default ButtonPrev