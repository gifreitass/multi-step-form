import { CircleToggleButton, DivToggleButton } from "./styles"
import { useSelector } from 'react-redux'
import { iState } from "../../../types/store.interface"
import store from "../../../store"
import { setPlanTimeAction } from "../../../store/plans/action"

const ToggleButton: React.FC<{isMonthly: boolean}> = (props) => {
    const planTime = useSelector((state: iState) => state.plan.planTime)

    const handleClick = () => {
        if (planTime === 'Mensal') {
            store.dispatch(setPlanTimeAction('Anual'))
            return
        } 
        store.dispatch(setPlanTimeAction('Mensal'))
    }

    return (
        <DivToggleButton isMonthly={props.isMonthly} onClick={() => handleClick()}>
            <CircleToggleButton></CircleToggleButton>
        </DivToggleButton>
    )
}

export default ToggleButton