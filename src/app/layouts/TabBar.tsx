import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
import styled, {css} from 'styled-components'

const TabBar: React.FC = () => {
    const location = useLocation()

    return (
        <NavContainer>
            <StyledNavLink to="/" isActive={location.pathname === '/'}>
                홈
            </StyledNavLink>
            <StyledNavLink to="/simplification" isActive={location.pathname.startsWith('/simplification')}>
                글 맞추기
            </StyledNavLink>
            <StyledNavLink to="/contact" isActive={location.pathname === '/contact'}>
                글맞춤 도서관
            </StyledNavLink>
            <StyledNavLink to="/contact/request" isActive={location.pathname === '/contact/request'}>
                글맞춤 부탁하기
            </StyledNavLink>
            <StyledNavLink to="/profile" isActive={location.pathname === '/profile'}>
                나의 정보
            </StyledNavLink>
        </NavContainer>
    )
}

export default TabBar

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-evenly;
    padding-top: 10px;
`

interface StyledNavLinkProps {
    isActive: boolean
}

const StyledNavLink = styled(NavLink)<StyledNavLinkProps>`
    text-decoration: none;
    font-size: ${({theme}) => theme.fontSize.md};
    text-align: center;
    color: #444444;
    cursor: pointer;
    position: relative;
    padding-bottom: 10px; // Ensure enough space for the underline

    ${({isActive, theme}) =>
        isActive &&
        css`
            &::after {
                content: '';
                position: absolute;
                left: 0;
                right: 0;
                bottom: -2px; // Position underline outside the padding
                height: 2px;
                background-color: ${theme.colors.primary};
            }

            font-weight: bold;
            color: ${theme.colors.primary};
        `}
    &:hover {
        &::after {
            content: '';
            position: absolute;
            left: 0;
            right: 0;
            bottom: -2px; // Position underline outside the padding
            height: 2px;
            background-color: ${({theme}) => theme.colors.primary};
        }

        color: ${({theme}) => theme.colors.primary};
    }
`
