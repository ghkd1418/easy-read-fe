import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    onClick: () => void
}

export const Button = ({onClick, children}: ButtonProps) => <Container onClick={onClick}>{children}</Container>

const Container = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontSize.lg};
    border-radius: 12px;

    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
`
