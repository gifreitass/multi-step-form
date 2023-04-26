import styled from "styled-components";

export const MainStyle = styled.main`
    height: 80vh;
    width: 30vw;
`

export const DivOptions = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 40px;
    @media (max-width: 1200px) {
        margin-top: 35px;
    }
`