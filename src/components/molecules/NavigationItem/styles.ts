import styled from "styled-components"

interface NavigationItemProps {
    isSelected?: boolean
}

export const DivNavigationItem = styled.div`
    position: relative;
    color: white;
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;
    cursor: pointer;
`

export const NumberNavigationItem = styled.div`
    border: ${(props: NavigationItemProps) => (props.isSelected ? 'none' : 'solid 2px white')};
    border-radius: 30px;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props: NavigationItemProps) => (props.isSelected ? 'hsl(206, 94%, 87%)' : 'none')};
`

export const TextNumberNavigationItem = styled.span`
    color: ${(props: NavigationItemProps) => (props.isSelected ? 'hsl(213, 96%, 18%)' : 'white')};
    font-weight: ${(props: NavigationItemProps) => (props.isSelected ? '600' : '500')};
`

export const StepStyle = styled.span`
    font-size: 10px;
    color: #e0e0e0;
`

export const TitleStepStyle = styled.h4`
    font-size: 13px;
`