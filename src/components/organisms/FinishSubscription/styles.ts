import styled from "styled-components";

export const MainStyle = styled.main`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30vw;
    gap: 25px;
    @media (max-width: 1030px) {
        width: 45vw;
    }
`

export const Image = styled.img`
    width: 70px;
`

export const Title = styled.h1`
    color: hsl(213, 96%, 18%);
`

export const SubTitle = styled.p`
    color: hsl(231, 11%, 63%);
    text-align: center;
`