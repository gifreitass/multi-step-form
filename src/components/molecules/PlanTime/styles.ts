import styled from "styled-components";

interface PlanTimeItemProps {
    isSelected?: boolean
}

export const DivPlanTime = styled.div`
    display: flex;
    width: 33vw;
    justify-content: center;
    gap: 30px;
    margin: 40px auto;
    background-color: #f8f9fe;
    align-items: center;
    border-radius: 5px;
    height: 7vh;
`

export const TextTime = styled.span`
    color: ${(props: PlanTimeItemProps) => (props.isSelected ? 'hsl(213, 96%, 18%)' : 'grey')};
    font-weight: ${(props: PlanTimeItemProps) => (props.isSelected ? 600 : 500)};
`