import { DivNavigationItem, NumberNavigationItem, StepStyle, TitleStepStyle } from "./styles"

const NavigationItem: React.FC<{number: string, step: string, titleStep: string}> = (props) => {
    return (
        <DivNavigationItem>
            <NumberNavigationItem>
                <span>{props.number}</span>
            </NumberNavigationItem>
            <div>
                <StepStyle>{props.step}</StepStyle>
                <TitleStepStyle>{props.titleStep}</TitleStepStyle>
            </div>
        </DivNavigationItem>
    )
}

export default NavigationItem