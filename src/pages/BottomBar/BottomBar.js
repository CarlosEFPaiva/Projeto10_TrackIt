import { useNavigate } from "react-router";
import styled from "styled-components";
import TodaysProgress from "./components/TodaysProgress.js";

export default function BottomBar({ isHidden }) {
    const navigate = useNavigate();
    return (
        isHidden ? "" : 
        <Wrapper>
            <span onClick={() => navigate('/habitos')}>
                Hábitos 
            </span>
            <TodaysProgress />
            <span onClick={() => navigate('/historico')}>
                Histórico 
            </span>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
    height: 70px;
    padding: 0px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: #FFFFFF;
    z-index: 2;
    & span {
        font-size: 18px;
        color: #52B6FF;
    }
`;
