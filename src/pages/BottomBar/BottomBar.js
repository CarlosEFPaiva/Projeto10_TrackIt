import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TodaysProgress from './components/TodaysProgress.js';

export default function BottomBar({ isHidden }) {
    const navigate = useNavigate();
    return (
        isHidden ? '' : (
            <Wrapper>
                <Menu onClick={() => navigate('/habitos')}>
                    Hábitos
                </Menu>
                <TodaysProgress />
                <Menu onClick={() => navigate('/historico')}>
                    Histórico
                </Menu>
            </Wrapper>
        )
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
`;

const Menu = styled.span`
    font-size: 18px;
    color: #52B6FF;
`;
