import store from "../../../store"
import { setPlanOptionAction } from "../../../store/plans/action"
import { Plans } from "../../../types/store.interface"
import { DivPlanOption, DivTextPlanOption, PricePlanOption, PromotionalPrice, TitlePlanOption } from "./styles"

const PlanOption: React.FC<{imagePlan: string, titlePlan: Plans, pricePlan: number, isSelected: boolean, recurrence: string}> = (props) => {
    const handleClick = (plan: Plans) => {
        store.dispatch(setPlanOptionAction(plan))
    }

    return (
        <DivPlanOption isSelected={props.isSelected} onClick={() => handleClick(props.titlePlan)}>
            <img src={props.imagePlan} alt="imagem referente ao plano" />
            <DivTextPlanOption>
                <TitlePlanOption>{props.titlePlan}</TitlePlanOption>
                <PricePlanOption>R${props.pricePlan}/mês</PricePlanOption>
                {props.recurrence === 'annual' ? <PromotionalPrice>2 meses grátis</PromotionalPrice> : ''}
            </DivTextPlanOption>
        </DivPlanOption>
    )
}

export default PlanOption