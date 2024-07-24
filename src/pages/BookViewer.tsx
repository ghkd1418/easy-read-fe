import {useEffect} from 'react'
import toast from 'react-hot-toast'
import TabBar from 'app/layouts/TabBar.tsx'
import styled from 'styled-components'
import customAxios from 'shared/customAxios.ts'

export default function BookViewer() {
    useEffect(() => {
        const getImage = async () => {
            const responseImageUrl = await customAxios.get('/karlo?keyword=happy')
            console.log('responseImageUrl', responseImageUrl)
        }
        getImage()
    }, [])

    const handleClick = () => {
        toast.custom(
            '다음 페이지로 넘길 땐 오른쪽 페이지를,\n' + '이전 페이지로 돌아갈 땐 왼쪽 페이지를\n' + '눌러주세요!',
            {
                style: {
                    border: 'solid 1px #A8A8A8',
                    background: 'white',
                },
                icon: '<img src="/images/축하다독이.svg" alt="복사하기" />',
            },
        )
    }

    return (
        <>
            <TabBar />
            <Container>
                <Wrapper>{/*<img src={} alt="" />*/}</Wrapper>
            </Container>
            BookViewer
            <button onClick={handleClick}>aa</button>
        </>
    )
}

const Container = styled.div`
    background-color: #f3f3f3;
    width: 100%;
    height: 100vh;
`
const Wrapper = styled.div`
    border: 1px solid black;
    border-radius: 5%;
    margin: 10%;
    width: 100%;
    height: 100vh;
    background-color: white;
`
