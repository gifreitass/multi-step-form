import { ButtonChange, DivAddOns, DivAdicionals, DivChosenPlan, DivPlan, DivPrice, DivTotal, PricePlan, SeparateDiv, SubTotalDiv, TitlePlan, TitleTotal, TotalPrice } from "./styles"

const FinishingUp = () => {
    return (
        <>
            <SubTotalDiv>
                <DivPlan>
                    <DivChosenPlan>
                        <TitlePlan>Arcade (Monthly)</TitlePlan>
                        <ButtonChange><u>Editar</u></ButtonChange>
                    </DivChosenPlan>
                    <PricePlan>R$9/mês</PricePlan>
                </DivPlan>
                <SeparateDiv></SeparateDiv>
                <DivAdicionals>
                    <DivAddOns>
                        <span>Online Service</span>
                        <span>Larger Storage</span>
                    </DivAddOns>
                    <DivPrice>
                        <span>+R$5/mês</span>
                        <span>+R$10/mês</span>
                    </DivPrice>
                </DivAdicionals>
            </SubTotalDiv>
            <DivTotal>
                <TitleTotal>Total (por mês)</TitleTotal>
                <TotalPrice>R$24/mês</TotalPrice>
            </DivTotal>
        </>
    )
}

export default FinishingUp