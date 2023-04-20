import styled from "styled-components";

interface ToggleButtonItemProps {
    isMonthly?: boolean
}

export const DivToggleButton = styled.div`
    width: 40px;
    padding: 10px 5px;
    border-radius: 10px;
    background-color: hsl(213, 96%, 18%);
    display: flex;
    justify-content: ${(props: ToggleButtonItemProps) => (props.isMonthly ? 'start' : 'flex-end')};
    align-items: center;
    cursor: pointer;
`

export const CircleToggleButton = styled.div`
    background-color: white;
    position: absolute;
    border-radius: 10px;
    width: 13px;
    height: 13px;
`