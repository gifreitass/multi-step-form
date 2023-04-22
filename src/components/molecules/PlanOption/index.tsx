import store from "../../../store"
import { setPlanOptionAction } from "../../../store/plans/action"
import { iState, Plans } from "../../../types/store.interface"
import { DivPlanOption, DivTextPlanOption, PricePlanOption, PromotionalPrice, TitlePlanOption } from "./styles"
import { useSelector } from 'react-redux'

const PlanOption: React.FC<{imagePlan: string, titlePlan: Plans, pricePlan: number, isSelected: boolean}> = (props) => {
    const planTime = useSelector((state: iState) => state.plan.planTime)

    const handleClick = (plan: Plans) => {
        store.dispatch(setPlanOptionAction(plan))
    }

    return (
        <DivPlanOption isSelected={props.isSelected} onClick={() => handleClick(props.titlePlan)}>
            <img src={props.imagePlan} alt="imagem referente ao plano" />
            <DivTextPlanOption>
                <TitlePlanOption>{props.titlePlan}</TitlePlanOption>
                {planTime === 'Anual' ? <PricePlanOption>R${props.pricePlan}/ano</PricePlanOption> : <PricePlanOption>R${props.pricePlan}/mês</PricePlanOption>}
                {planTime === 'Anual' ? <PromotionalPrice>2 meses grátis</PromotionalPrice> : ''}
            </DivTextPlanOption>
        </DivPlanOption>
    )
}

export default PlanOption