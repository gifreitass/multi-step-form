import store from "../../../store"
import { setStepAction } from "../../../store/step/action"
import { DivNavigationItem, NumberNavigationItem, StepStyle, TextNumberNavigationItem, TitleStepStyle } from "./styles"
import { useSelector } from 'react-redux'
import { iState } from "../../../types/store.interface"

const NavigationItem: React.FC<{number: string, step: string, titleStep: string, isSelected: boolean}> = (props) => {
    const userInformation = useSelector((state: iState) => state.formValues)

    const isFirstStepValid = userInformation.email || userInformation.name || userInformation.phone

    const handleClick = (number: string) => {
        if (isFirstStepValid) {
            store.dispatch(setStepAction(number))
        }
    }

    return (
        <DivNavigationItem onClick={() => handleClick(props.number)}>
            <NumberNavigationItem isSelected={props.isSelected}>
                <TextNumberNavigationItem isSelected={props.isSelected}>{props.number}</TextNumberNavigationItem>
            </NumberNavigationItem>
            <div>
                <StepStyle>{props.step}</StepStyle>
                <TitleStepStyle>{props.titleStep}</TitleStepStyle>
            </div>
        </DivNavigationItem>
    )
}

export default NavigationItem