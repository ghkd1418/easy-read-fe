import styled from 'styled-components'

interface DefaultLayoutProps {
    children: React.ReactNode
}

export default function DefaultLayout({children}: DefaultLayoutProps) {
    return <Container>{children}</Container>
}

const Container = styled.div`
    max-width: 924px;
    max-height: 100vh;
    //min-height: 583px;

    margin: 0 auto;

    min-height: 100vh; /* Ensure the container takes the full viewport height */
`
