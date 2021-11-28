import styled from "styled-components";

export default function ScreenSubtitle({ completionPercentage }) {
    return (
        <Wrapper completionPercentage = { completionPercentage }>
            {completionPercentage ? `${completionPercentage}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 6px;
    font-size: 18px;
    color: ${ ({completionPercentage}) => completionPercentage ? "#8FC549" : "#BABABA" };
`