import ToggleButton from "../ToggleButton"
import { DivPlanTime, TextTime } from "./styles"
import { useSelector } from 'react-redux'
import { iState } from "../../../types/store.interface"

const PlanTime: React.FC = () => {
    const planTime = useSelector((state: iState) => state.plan.planTime)

    return (
        <DivPlanTime>
            <TextTime isSelected={planTime === "Mensal"}>Mensal</TextTime>
            <ToggleButton isMonthly={planTime === "Mensal"} />
            <TextTime isSelected={planTime === "Anual"}>Anual</TextTime>
        </DivPlanTime>
    )
}

export default PlanTime