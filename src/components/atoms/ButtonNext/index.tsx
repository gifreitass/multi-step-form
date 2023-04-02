import { ButtonStyle } from "./styles"

const Button: React.FC<{children: string}> = (props) => {
    return (
        <ButtonStyle>{props.children}</ButtonStyle>
    )
}

export default Button