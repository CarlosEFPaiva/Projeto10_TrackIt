import styled from "styled-components"

export default function ScreenDescription({ text }) {
    return (
        <Main>
            {text}
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    margin-top: 28px;
    word-wrap: break-word;
    font-size: 18px;
    color: #666666;
`