import styled from "styled-components"

export default function ScreenDescription({ text, isShown }) {
    return (
        <Main isShown={isShown}>
            {text}
        </Main>
    );
}

const Main = styled.div`
    width: 100%;
    display: ${({isShown}) => (isShown ? 'block' : 'none')};
    margin-top: 28px;
    word-wrap: break-word;
    font-size: 18px;
    color: #666666;
`