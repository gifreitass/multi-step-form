import styled, { css } from "styled-components";

const spacedElements = css`
    display: flex;
    justify-content: space-between;
`

const gray = css`
    color: hsl(231, 11%, 63%);
`

const marineBlue = css`
    color: hsl(213, 96%, 18%);
`

export const SubTotalDiv = styled.div`
    background-color: #f8f9fe;
    padding: 25px 20px;
    border-radius: 7px;
    margin-top: 40px;
`

export const DivPlan = styled.div`
    align-items: center;
    ${spacedElements}
`

export const DivChosenPlan = styled.div`
    display: flex;
    flex-direction: column;
`

export const SeparateDiv = styled.div`
    background-color: hsl(229, 24%, 87%);
    height: 1px;
    width: 26.5rem;
    margin: 25px 0;
`

export const DivAdicionals = styled.div`
    ${spacedElements}
`

export const DivAddOns = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    ${gray}
    font-size: 14px;
`

export const DivPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 14px;
    ${marineBlue};
`

export const DivTotal = styled.div`
    ${spacedElements}
    padding: 0 35px;
    margin-top: 40px;
`

export const TitlePlan = styled.span`
    ${marineBlue};
    font-weight: 600;
`

export const ButtonChange = styled.span`
    ${gray};
    cursor: pointer;
    font-size: 15px;
    margin-top: 5px;
`

export const PricePlan = styled.span`
    ${marineBlue};
    font-weight: 600;
`

export const TitleTotal = styled.span`
    ${gray};
`

export const TotalPrice = styled.span`
    font-size: 20px;
    font-weight: 600;
    color: hsl(243, 100%, 62%);
`