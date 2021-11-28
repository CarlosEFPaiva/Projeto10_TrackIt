import styled from 'styled-components';
import LoadingGif from '../../assets/img/Loading-bgGray.gif';

export default function Loading() {
    return (
        <Image src={LoadingGif} />
    );
}

const Image = styled.img`
    margin-top: 100px;
    width: 80vw;
    height: 80vw;
`;
