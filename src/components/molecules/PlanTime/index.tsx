import ToggleButton from "../ToggleButton"
import { DivPlanTime, TextTime } from "./styles"

const PlanTime = () => {
    return (
        <DivPlanTime>
            <TextTime>Mensal</TextTime>
            <ToggleButton />
            <TextTime>Anual</TextTime>
        </DivPlanTime>
    )
}

export default PlanTime