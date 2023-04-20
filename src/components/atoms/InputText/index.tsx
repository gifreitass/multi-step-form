import { DivInput, DivLabelError, InputStyle, LabelInput, TextError } from "./styles"

const InputText: React.FC<{for: string, id: string, placeholder: string, label: string, value: string, onChange: any, error: string | undefined, isNotUndefined: boolean}> = (props) => {
    return (
        <DivInput>
            <DivLabelError>
            <LabelInput htmlFor={props.for}>{props.label}</LabelInput> 
            <TextError>{props.error}</TextError>
            </DivLabelError>
            <InputStyle isNotUndefined={props.isNotUndefined} type="text" id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/> <br />
        </DivInput>
    )
}

export default InputText