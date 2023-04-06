import { CheckBox, DivOptions, DivSelectOption, Price, SubTitle, Title } from "./styles"

const AddOnsOption:React.FC<{title: string, subtitle: string, price: string}> = (props) => {
    return (
        <DivOptions>
            <DivSelectOption>
                <CheckBox type="checkbox" />
                <div>
                    <Title>{props.title}</Title>
                    <SubTitle>{props.subtitle}</SubTitle>
                </div>
            </DivSelectOption>
            <div>
                <Price>{props.price}</Price>
            </div>
        </DivOptions>
    )
}

export default AddOnsOption