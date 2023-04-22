import { ButtonStyle } from "./styles"

type ButtonTypes = "button" | "submit" | "reset"

const ButtonNext: React.FC<{children: string, type?: ButtonTypes}> = (props) => {
    return (
        <ButtonStyle type={props.type}>{props.children}</ButtonStyle>
    )
}

export default ButtonNext