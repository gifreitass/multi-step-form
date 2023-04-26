import { ButtonChange, DivAddOns, DivAdicionals, DivChosenPlan, DivPlan, DivPrice, DivTotal, PricePlan, SeparateDiv, SubTotalDiv, TitlePlan, TitleTotal, TotalPrice } from "./styles"
import { useSelector } from 'react-redux'
import { Addons, iAddonsValues, iState } from "../../../types/store.interface"
import { ADDONS, PLANS } from "../../../shared/constants"
import { useMemo } from 'react'
import store from "../../../store"
import { setStepAction } from "../../../store/step/action"

const FinishingUp = () => {
    const planInfo = useSelector((state: iState) => state.plan.planOption)
    const planTime = useSelector((state: iState) => state.plan.planTime)
    const addons = useSelector((state: iState) => state.formValues.addons)

    const recurrence = planTime === 'Mensal' ? 'monthly' : 'annual'

    const selectedAddons = useMemo(() => {
        const selected: Addons[] = []

        Object.keys(addons).forEach((addonsName) => {
            const typedAddonsName = addonsName as Addons
            if (addons[typedAddonsName]) {
                selected.push(typedAddonsName)
            }
        })

        return selected
    }, [])

    const totalAddons = selectedAddons.map((addons) => {
        if (planTime === 'Mensal') {
            return ADDONS[addons][`${recurrence}_value`]
        }
        return ADDONS[addons][`${recurrence}_value`]
    })

    const totalPriceAddons = totalAddons.reduce((acumulator, value) => {
        return acumulator + value;
    }, 0);

    const plan = useMemo(() => {
        if (planInfo === 'Arcade') {
            return 'arcade'
        }
        if (planInfo === 'Advanced') {
            return 'advanced'
        }
        if (planInfo === 'Pro') {
            return 'pro'
        }
        else {
            return 'arcade'
        }
    }, [])

    const handleClick = () => {
        store.dispatch(setStepAction('2'))
    }

    return (
        <>
            <SubTotalDiv>
                <DivPlan>
                    <DivChosenPlan>
                        <TitlePlan>{planInfo} ({planTime})</TitlePlan>
                        <ButtonChange onClick={handleClick}><u>Editar</u></ButtonChange>
                    </DivChosenPlan>
                    {planTime === 'Mensal' ? <PricePlan>R${PLANS[plan][`${recurrence}_value`]}/mês</PricePlan> : <PricePlan>R${PLANS[plan][`${recurrence}_value`]}/ano</PricePlan>}
                </DivPlan>
                {selectedAddons.length > 0 &&
                    <>
                        <SeparateDiv></SeparateDiv>
                        <DivAdicionals>
                            <DivAddOns>
                                {selectedAddons.map((addons, index) => {
                                    return <span key={index}>{ADDONS[addons].title}</span>
                                })}
                            </DivAddOns>
                            <DivPrice>
                                {selectedAddons.map((addons, index) => {
                                    if (planTime === 'Mensal') {
                                        return <span key={index}>R${ADDONS[addons][`${recurrence}_value`]}/mês</span>
                                    }
                                    return <span key={index}>R${ADDONS[addons][`${recurrence}_value`]}/ano</span>
                                })}
                            </DivPrice>
                        </DivAdicionals>
                    </>
                }
            </SubTotalDiv>
            <DivTotal>
                {planTime === 'Mensal' ? <>
                    <TitleTotal>Total (por mês)</TitleTotal
                    ><TotalPrice>R${PLANS[plan][`${recurrence}_value`] + totalPriceAddons}/mês</TotalPrice>
                </> :
                    <>
                        <TitleTotal>Total (por ano)</TitleTotal>
                        <TotalPrice>R${PLANS[plan][`${recurrence}_value`] + totalPriceAddons}/ano</TotalPrice>
                    </>
                }
            </DivTotal>
        </>
    )
}

export default FinishingUp