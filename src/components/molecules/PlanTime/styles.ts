import styled from "styled-components";

interface PlanTimeItemProps {
    isSelected?: boolean
}

export const DivPlanTime = styled.div`
    display: flex;
    width: 30vw;
    justify-content: center;
    gap: 30px;
    margin: 40px auto 20px auto;
    background-color: #f8f9fe;
    align-items: center;
    border-radius: 5px;
    height: 7vh;
    @media (max-width: 1200px) {
        width: 33vw;
    }
    @media (max-width: 1000px) {
        width: 37vw;
    }
`

export const TextTime = styled.span`
    color: ${(props: PlanTimeItemProps) => (props.isSelected ? 'hsl(213, 96%, 18%)' : 'grey')};
    font-weight: ${(props: PlanTimeItemProps) => (props.isSelected ? 600 : 500)};
`