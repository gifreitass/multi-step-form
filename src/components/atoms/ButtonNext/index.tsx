import store from "../../../store"
import { setStepAction } from "../../../store/step/action"
import { ButtonStyle } from "./styles"

type ButtonTypes = "button" | "submit" | "reset"

const ButtonNext: React.FC<{children: string, type?: ButtonTypes, nextPage: string}> = (props) => {
    const handleClick = () => {
        store.dispatch(setStepAction(props.nextPage))
    }

    return (
        <ButtonStyle onClick={handleClick} type={props.type}>{props.children}</ButtonStyle>
    )
}

export default ButtonNext