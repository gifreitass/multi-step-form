import { DivPlanOption, DivTextPlanOption, PricePlanOption, TitlePlanOption } from "./styles"

const PlanOption: React.FC<{imagePlan: string, titlePlan: string, pricePlan: string}> = (props) => {
    return (
        <DivPlanOption>
            <img src={props.imagePlan} alt="imagem referente ao plano" />
            <DivTextPlanOption>
                <TitlePlanOption>{props.titlePlan}</TitlePlanOption>
                <PricePlanOption>{props.pricePlan}</PricePlanOption>
            </DivTextPlanOption>
        </DivPlanOption>
    )
}

export default PlanOption