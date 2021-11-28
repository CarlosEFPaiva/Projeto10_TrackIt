import styled from "styled-components";
import { ImCross } from "react-icons/im";
import { MdDone } from "react-icons/md";

export default function HabitLine({habit, isDone}) {
    return (
        <Wrapper>
            {habit}
            <Box isDone={isDone} >
                {isDone ? <MdDone /> : <ImCross />}
            </Box>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 100%;
    word-wrap: break-word;
    font-size: 18px;
    display: flex;
    align-items: center;
    margin: 6px 0px;
    line-height: 20px;
    text-align: center;
`

const Box = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1px solid #000;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${ ({isDone}) => isDone ? "green" : "red" };
    font-size: ${ ({isDone}) => isDone ? "16px" : "12px" };
    margin-left: 10px;
    color: #fff;

`