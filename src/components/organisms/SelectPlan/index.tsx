import PlanOption from "../../molecules/PlanOption"
import TitleStep from "../../molecules/TitleStep"
import arcadeIcon from "../../../assets/images/icon-arcade.svg"
import advancedIcon from "../../../assets/images/icon-advanced.svg"
import proIcon from "../../../assets/images/icon-pro.svg"
import ButtonNext from "../../atoms/ButtonNext"
import { DivSelectPlan, MainStyle } from "./styles"
import PlanTime from "../../molecules/PlanTime"
import ButtonPrev from "../../atoms/ButtonPrev"
import { useSelector } from 'react-redux'
import { iState } from "../../../types/store.interface"
import { PLANS } from "../../../shared/constants"

const SelectPlan: React.FC = () => {
    const plan = useSelector((state: iState) => state.plan.planOption)
    const planTime = useSelector((state: iState) => state.plan.planTime)

    const recurrence = planTime === 'Mensal' ? 'monthly' : 'annual'

    return (
        <MainStyle>
            <TitleStep title="Selecione seu plano" subtitle="Temos a opção da cobrança mensal ou anual." />
            <DivSelectPlan>
                <PlanOption isSelected={plan === "Arcade"} imagePlan={arcadeIcon} titlePlan="Arcade" pricePlan={PLANS.arcade[`${recurrence}_value`]}/>
                <PlanOption isSelected={plan === "Advanced"} imagePlan={advancedIcon} titlePlan="Advanced" pricePlan={PLANS.advanced[`${recurrence}_value`]} />
                <PlanOption isSelected={plan === "Pro"} imagePlan={proIcon} titlePlan="Pro" pricePlan={PLANS.pro[`${recurrence}_value`]} />
            </DivSelectPlan>
            <PlanTime />
            <ButtonPrev>Anterior</ButtonPrev>
            <ButtonNext>Próximo</ButtonNext>
        </MainStyle>
    )
}

export default SelectPlan