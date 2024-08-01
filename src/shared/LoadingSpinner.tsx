import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Loader = styled.img`
    //border-width: 0.5rem;
    //border-style: solid;
    //border-color: #ffc55a;
    width: 3.625rem;
    height: 3.625rem;
    border-radius: 50%;
    position: relative;
    -webkit-animation: spin 2s infinite;
    animation: spin 2s infinite;

    &:before,
    &:after {
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background: #ffc55a;
        position: absolute;
        left: 0.125rem;
    }

    &:before {
        top: 0.063rem;
    }

    &:after {
        bottom: 0.063rem;
    }

    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
    }
`

export function LoadingSpinner() {
    return (
        <Container>
            <Loader src="/images/dadog.gif" width={'24px'} alt="로딩중" />
        </Container>
    )
}
