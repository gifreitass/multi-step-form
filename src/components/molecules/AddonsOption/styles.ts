import styled from "styled-components";

interface AddonsProps {
    isSelected?: boolean
}

export const DivOptions = styled.div`
    display: flex;
    width: 30vw;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: ${(props: AddonsProps) => props.isSelected ? '2px solid hsl(243, 100%, 62%)' : '2px solid hsl(229, 24%, 87%)'};
    background-color: ${(props: AddonsProps) => (props.isSelected ? '#f8f9fe' : 'none')};
    border-radius: 7px;
    height: 5rem;
    cursor: pointer;
`

export const DivSelectOption = styled.div`
    display: flex;
`

export const CheckBox = styled.input`
    width: 17px;
    margin-right: 15px;
    color: hsl(229, 24%, 87%);
`

export const Title = styled.h4`
    color: hsl(213, 96%, 18%);
`

export const SubTitle = styled.p`
    color: hsl(231, 11%, 63%);
    font-size: 13px;
    margin-top: 2px;
`

export const Price = styled.span`
    color: hsl(243, 100%, 62%);
    font-size: 13px;
`