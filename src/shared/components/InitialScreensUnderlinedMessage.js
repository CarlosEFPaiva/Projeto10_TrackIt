import styled from "styled-components";
import { Link } from "react-router-dom";

export default function UnderButtonMessage({ text, linkTo }) {
    return (
        <Link to ={linkTo}>
            <Main>
                {text}
            </Main>
        </Link>
    );
}

const Main = styled.span`
    font-size: 14px;
    text-decoration: underline;
    color: #52B6FF;
`