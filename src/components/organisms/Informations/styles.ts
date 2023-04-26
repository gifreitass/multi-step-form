import styled, { css } from "styled-components";

const button = css`
    padding: 13px;
    width: 6.5rem;
    border-radius: 5px;
    color: white;
    border: none;
    margin-top: 50px;
    float: right;
    font-weight: 600;
`

export const MainStyleForm = styled.form`
    height: 80vh;
    width: 30vw;
    @media (max-width: 1120px) {
        width: none;
    }
`

export const DivFormik = styled.div`
    font-size: small;
    margin-top: 7px;
    margin-left: 3px;
    color: #cc0000;
`

export const ButtonNext = styled.button`
    ${button};
    background-color: hsl(213, 96%, 18%);
    cursor: pointer;
    @media (max-width: 1120px) {
        margin-top: 40px;
    }
`

export const ButtonNextError = styled.button`
    ${button};
    background-color: grey;
    @media (max-width: 1120px) {
        margin-top: 40px;
    }
`