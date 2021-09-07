import styled from "styled-components";
import { FixedBar, TrackItSpan } from "../shared/SharedElements";

export default function BottomBar({isHidden}) {
    if(isHidden) {
        return "";
    }

    return (
        <FixedBar position = "bottom" >
            <MenuOption>Hábitos</MenuOption>
            <TodaysProgress> Hoje </TodaysProgress>
            <MenuOption>Histórico</MenuOption>
        </FixedBar>
    );
}

const MenuOption = styled.span`
    font-size: 18px;
    color: #52B6FF;
`
const TodaysProgress = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 50%;
    background-color: #52B6FF;
    display: flex;
    position: fixed;
    left: calc( ( 100% - 91px ) / 2);
    bottom: 10px;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    font-size: 18px;
`