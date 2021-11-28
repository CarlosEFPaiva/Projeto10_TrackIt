import styled from 'styled-components';

export default function ScreenTitle({ text }) {
    return (
        <Main>
            {text}
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 24px;
    color: #126BA5;
`;
