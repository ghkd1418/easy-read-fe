import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>

            <LinkContainer>
                <LinkWrapper>
                    <StyledLink to={'/simplification/file'}>
                        <img src="/images/upload.svg" alt="" />글 파일 올리기
                    </StyledLink>
                </LinkWrapper>
                <LinkWrapper>
                    <StyledLink to={'/simplification/text'}>
                        <img src="/images/edit.svg" alt="" />
                        직접 글 쓰기
                    </StyledLink>
                </LinkWrapper>
            </LinkContainer>
        </div>
    )
}

const LinkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`

const LinkWrapper = styled.div`
    width: 360px;
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
