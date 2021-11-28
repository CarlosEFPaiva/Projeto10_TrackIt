import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export default function UnderButtonMessage({ text, path }) {
    const navigate = useNavigate();
    return (
        <Main onClick={() => navigate(path)}>
            {text}
        </Main>
    );
}

const Main = styled.span`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
`;
