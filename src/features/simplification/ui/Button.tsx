import React, {ReactNode} from 'react'
import styled from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    onClick?: () => void
    size: 'sm' | 'md' | 'lg'
}

export const Button = ({onClick, children, size}: ButtonProps) => (
    <Container onClick={onClick} size={size}>
        {children}
    </Container>
)

const Container = styled.button<{size: 'sm' | 'md' | 'lg'}>`
    width: 100%;
    height: ${({size}) => {
        switch (size) {
            case 'sm':
                return '40px'
            case 'md':
                return '60px'
            case 'lg':
                return '83px'
            default:
                return '83px'
        }
    }};
    background-color: ${({theme}) => theme.colors.primary};
    font-size: ${({theme}) => theme.fontSize.lg};
    border-radius: 12px;

    font-family: 'Pretendard', sans-serif;
    font-weight: 700;
`
