import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import TabBar from 'app/layouts/TabBar.tsx'

function NotFound() {
    return (
        <>
            <Container>
                <Wrapper>
                    <LogoImg src="/images/dadog_tr.png" alt="logo" />
                    <TitleWrapper>
                        <Title>준비중🧹</Title>
                    </TitleWrapper>
                </Wrapper>
            </Container>
            <TabBar />
            <Outlet />
        </>
    )
}

export default NotFound

const Container = styled.header`
    background-color: #ffede7;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5%;
    height: 124px;
    padding-left: 5%;
`

const LogoImg = styled.img`
    width: 88px;
    height: 72px;
`

const TitleWrapper = styled.div``

const Title = styled.h1`
    margin-bottom: 5%;
    font-weight: 700;
    font-size: 30px;
`
