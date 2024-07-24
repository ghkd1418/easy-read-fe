import {Outlet, useLocation} from 'react-router-dom'
import styled from 'styled-components'
import TabBar from 'app/layouts/TabBar.tsx'

interface HeaderProps {
    logoSrc: string
    title?: string
    subtitle?: string
}

function Header({logoSrc, title, subtitle}: HeaderProps) {
    const location = useLocation()

    return (
        <>
            <Container>
                <Wrapper>
                    <div>
                        <LogoImg src={logoSrc} alt="logo" />
                        {location.pathname === '/' && <LogoImg src={'/images/logo_text.svg'} />}
                    </div>
                    <TitleWrapper>
                        <Title>{title}</Title>
                        <SubTitle>{subtitle}</SubTitle>
                    </TitleWrapper>
                </Wrapper>
            </Container>
            <TabBar />
            <Outlet />
        </>
    )
}

export default Header

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

const SubTitle = styled.h2`
    font-size: 20px;
`
