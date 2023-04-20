import store from "../../../store"
import { setStepAction } from "../../../store/step/action"
import { DivNavigationItem, NumberNavigationItem, StepStyle, TextNumberNavigationItem, TitleStepStyle } from "./styles"

const NavigationItem: React.FC<{number: string, step: string, titleStep: string, isSelected: boolean}> = (props) => {
    const handleClick = (number: string) => {
        store.dispatch(setStepAction(number))
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