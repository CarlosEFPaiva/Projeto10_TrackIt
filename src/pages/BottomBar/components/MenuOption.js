import styled from "styled-components";
import { Link } from "react-router-dom";

export default function MenuOption({ linkTo, title }) {
    return (
        <Link to = {linkTo}>
            <Main>
                {title}
            </Main>
        </Link>
    );
}


const Main = styled.span`
    font-size: 18px;
    color: #52B6FF;
`

