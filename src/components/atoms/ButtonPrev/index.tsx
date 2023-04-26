import store from "../../../store"
import { setStepAction } from "../../../store/step/action"
import { SpanStyle } from "./styles"

const ButtonPrev: React.FC<{children: string, prevPage: string}> = (props) => {
    const handleClick = () => {
        store.dispatch(setStepAction(props.prevPage))
    }

    return (
        <SpanStyle onClick={handleClick}>{props.children}</SpanStyle>
    )
}

export default ButtonPrev