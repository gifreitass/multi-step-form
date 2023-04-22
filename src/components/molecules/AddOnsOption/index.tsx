import { useSelector } from 'react-redux'
import { Addons, iState } from "../../../types/store.interface"
import store from "../../../store"
import { setAddonsAction } from "../../../store/formValues/action"
import { CheckBox, DivOptions, DivSelectOption, Price, SubTitle, Title } from './styles'

const AddOnsOption:React.FC<{title: string, subtitle: string, price: number, id: Addons}> = (props) => {
    const planTime = useSelector((state: iState) => state.plan.planTime)
    const addons = useSelector((state: iState) => state.formValues.addons)
    const isAddonsSelected = addons[props.id]

    const handleClick = () => {
        store.dispatch(setAddonsAction({
            ...addons,
            [props.id]: !isAddonsSelected
        }))
    }

    return (
        <DivOptions isSelected={isAddonsSelected} onClick={handleClick}>
            <DivSelectOption>
                <CheckBox type="checkbox" checked={isAddonsSelected}/>
                <div>
                    <Title>{props.title}</Title>
                    <SubTitle>{props.subtitle}</SubTitle>
                </div>
            </DivSelectOption>
            <div>
                {planTime === 'Mensal' ? <Price>R${props.price}/mês</Price> : <Price>R${props.price}/ano</Price>}
            </div>
        </DivOptions>
    )
}

export default AddOnsOption