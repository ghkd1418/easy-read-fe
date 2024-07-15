import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'features/simplification/ui/Button.tsx'

export default function Home() {
    return (
        <Container>
            <Title>글 맞추기</Title>

            <LinkContainer>
                <StyledButton size={'lg'}>
                    <img src="/images/upload.svg" alt="" />
                    <StyledLink to={'/simplification/file'}>글 파일 올리기</StyledLink>
                </StyledButton>
                <StyledButton size={'lg'}>
                    <img src="/images/edit.svg" alt="" />
                    <StyledLink to={'/simplification/text'}>직접 글 쓰기</StyledLink>
                </StyledButton>
            </LinkContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 10% 6%;
`

const Title = styled.h1`
    margin-bottom: 5%;
    font-weight: 800;
    font-size: 64px;
    text-align: center;
`

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const StyledButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
`

const StyledLink = styled(Link)`
    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontSize.lg};
    border-radius: 12px;
    text-decoration: none;
    color: black;
    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
`
