// RequestBook.tsx
import styled from 'styled-components'
import {useNavigate, useSearchParams} from 'react-router-dom'
import {Button} from 'features/simplification/ui/Button.tsx'

export default function RequestSuccess() {
    const [searchParams] = useSearchParams()
    const title = searchParams.get('title')
    const navigation = useNavigate()

    const handleClick = () => {
        navigation('/my')
    }

    const handleRetry = () => {
        navigation('/request-book')
    }

    return (
        <Container>
            <Title>{title}</Title>
            <Content>
                `{title} 의 글맞춤 부탁을 전달했어요! '나의 정보'에서 얼마나 되고 있는지 확인할 수 있어요.`
            </Content>
            <Image src="/images/celdadog.png" alt="" />
            <ButtonWrapper>
                <RetryButton onClick={handleRetry} size={'md'}>
                    다시하기
                </RetryButton>
                <Button onClick={handleClick} size={'md'}>
                    나의 부탁 확인하기
                </Button>
            </ButtonWrapper>
        </Container>
    )
}

const Container = styled.main`
    border: 5px solid #f3f3f3;
    height: 406px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
`

const ButtonWrapper = styled.div`
    display: flex;
    gap: 10%;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 18px;
`

const Content = styled.p`
    font-size: 18px;
`

const RetryButton = styled.button`
    width: 100%;
    color: black;
    background-color: gray;
    font-size: ${({theme}) => theme.fontSize.lg};
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add shadow here */

    font-family: 'Pretendard', sans-serif;
    font-weight: 500;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &:hover {
        opacity: 0.9;
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
    }
`

const Image = styled.img`
    //width: 50px;
    width: 30%;
`
