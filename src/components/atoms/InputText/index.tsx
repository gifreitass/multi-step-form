import { DivInput, InputStyle, LabelInput } from "./styles"

const InputText: React.FC<{for: string, id: string, placeholder: string, label: string}> = (props) => {
    return (
        <DivInput>
            <LabelInput htmlFor={props.for}>{props.label}</LabelInput> <br />
            <InputStyle type="text" id={props.id} placeholder={props.placeholder}/> <br />
        </DivInput>
    )
}

export default InputText