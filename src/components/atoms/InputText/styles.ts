import styled from "styled-components"

export const DivInput = styled.div`
    margin-top: 30px;
`

export const LabelInput = styled.label`
    font-size: 14px;
    color: hsl(213, 96%, 18%);
`

export const InputStyle = styled.input`
    padding: 15px 10px;
    width: 23rem;
    border-radius: 5px;
    margin-top: 10px;
    border: #b2b2b2 solid 2px;
    &:focus {
        border: hsl(213, 96%, 18%) solid 2px;
    }
`
