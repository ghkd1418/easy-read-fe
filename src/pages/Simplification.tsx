import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Simplification() {
    return (
        <Container>
            <LinkContainer>
                <StyledLink to={'/simplification/file'}>
                    <img src="/images/upload.svg" alt="" />
                    <p>글 파일 올리기</p>
                </StyledLink>
                <Text>또는</Text>
                <StyledLink to={'/simplification/text'}>
                    <img src="/images/edit.svg" alt="" />
                    <p>직접 글 쓰기</p>
                </StyledLink>
            </LinkContainer>
            <ImageWrapper>
                <img src="/images/home_left.png" alt="도움말" />
                <img src="/images/home_right.png" alt="도움말" />
            </ImageWrapper>
        </Container>
    )
}

const Container = styled.main`
    padding: 6% 6%;
    border: 5px solid #f3f3f3;
    flex: 1;
    height: 406px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    align-items: center;
`

const LinkContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 3%;
`

const Text = styled.span`
    font-weight: bold;
    width: 15%;
    text-align: center;
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 83px;
    font-size: ${({theme}) => theme.fontSize.lg};
    border-radius: 12px;
    text-decoration: none;
    color: black;
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;

    background-color: ${({theme}) => theme.colors.buttonColor};
    font-size: ${({theme}) => theme.fontSize.lg};

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
        opacity: 0.9;
    }
`

const ImageWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    & > img {
        width: 40%;
    }
`
