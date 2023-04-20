import styled from "styled-components"

interface InputTextProps {
    isNotUndefined?: boolean
}

export const DivInput = styled.div`
    margin-top: 30px;
`

export const DivLabelError = styled.div`
    display: flex;
    justify-content: space-between;
`

export const LabelInput = styled.label`
    font-size: 14px;
    color: hsl(213, 96%, 18%);
`

export const TextError = styled.span`
    color: hsl(354, 84%, 57%);
    font-size: 14px;
    font-weight: 600;
`

export const InputStyle = styled.input`
    padding: 15px 10px;
    width: 30vw;
    border-radius: 5px;
    margin-top: 10px;
    border: ${(props: InputTextProps) => (props.isNotUndefined ? 'hsl(354, 84%, 57%) solid 2px' : '#b2b2b2 solid 2px')};
    &:focus {
        border: hsl(213, 96%, 18%) solid 2px;
    }
`


