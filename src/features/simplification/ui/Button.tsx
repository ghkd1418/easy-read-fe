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
                return '60px'
        }
    }};
    background-color: ${({theme}) => theme.colors.primary};
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
