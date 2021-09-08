import styled from "styled-components";
import { BsTrash } from "react-icons/bs";

export default function TrashButton() {
    return (
        <Button>
            <BsTrash />
        </Button>
    );

}

const Button = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 15px;
    color: #666666;
`