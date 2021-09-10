import styled from "styled-components"
import { Link } from "react-router-dom"

export default function TodaysProgress({ linkTo, title }) {
    return (
        <Link to = {linkTo}>
            <Main>
                {title}
            </Main>
        </Link>
    );
}


const Main = styled.div`
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