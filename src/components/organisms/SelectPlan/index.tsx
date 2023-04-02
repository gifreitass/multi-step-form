import PlanOption from "../../molecules/PlanOption"
import TitleStep from "../../molecules/TitleStep"
import arcadeIcon from "../../../assets/images/icon-arcade.svg"
import advancedIcon from "../../../assets/images/icon-advanced.svg"
import proIcon from "../../../assets/images/icon-pro.svg"
import ButtonNext from "../../atoms/ButtonNext"
import { MainStyle } from "../Informations/styles"
import { MainSelectPlan } from "./styles"
import PlanTime from "../../molecules/PlanTime"
import ButtonPrev from "../../atoms/ButtonPrev"

const SelectPlan: React.FC = () => {
    return (
        <MainStyle>
            <TitleStep title="Selecione seu plano" subtitle="Temos a opção da cobrança mensal ou anual." />
            <MainSelectPlan>
                <PlanOption imagePlan={arcadeIcon} titlePlan="Arcade" pricePlan="R$30/ mês" />
                <PlanOption imagePlan={advancedIcon} titlePlan="Advanced" pricePlan="R$60/ mês" />
                <PlanOption imagePlan={proIcon} titlePlan="Pro" pricePlan="R$100/ mês" />
            </MainSelectPlan>
            <PlanTime />
            <ButtonPrev>Anterior</ButtonPrev>
            <ButtonNext>Próximo</ButtonNext>
        </MainStyle>
    )
}

export default SelectPlan