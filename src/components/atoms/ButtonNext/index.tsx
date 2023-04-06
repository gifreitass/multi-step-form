import { ButtonStyle } from "./styles"

const ButtonNext: React.FC<{children: string}> = (props) => {
    return (
        <ButtonStyle>{props.children}</ButtonStyle>
    )
}

export default ButtonNext