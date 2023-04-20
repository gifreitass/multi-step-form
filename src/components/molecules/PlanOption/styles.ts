import styled from "styled-components"

interface PlanOptionItemProps {
    isSelected?: boolean
}

export const DivPlanOption = styled.div`
    border: ${(props: PlanOptionItemProps) => (props.isSelected ? 'hsl(243, 100%, 62%) solid 2px' : '#b2b2b2 solid 2px')};
    background-color: ${(props: PlanOptionItemProps) => (props.isSelected ? '#f8f9fe' : 'none')};
    border-radius: 10px;
    width: 10rem;
    margin: 0 auto;
    gap: 2rem;
    padding: 20px;
    cursor: pointer;
`

export const DivTextPlanOption = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`

export const TitlePlanOption = styled.span`
    font-size: 15px;
    font-weight: 600;
    color: hsl(213, 96%, 18%);
`

export const PricePlanOption = styled.span`
    font-size: 13px;
    color: grey;
    margin-top: 5px;
`

export const PromotionalPrice = styled.span`
    font-size: small;
    color: hsl(213, 96%, 18%);
    margin-top: 5px;
`