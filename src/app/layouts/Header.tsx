import {Outlet} from 'react-router-dom'
import styled from 'styled-components'

function Header() {
    return (
        <>
            <header>
                <Nav>Logo</Nav>
            </header>
            <Outlet />
        </>
    )
}

export default Header

const Nav = styled.nav`
    display: inline;
`
