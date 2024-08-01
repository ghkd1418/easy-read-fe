import {useEffect, useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import {useModal} from 'features/simplification/lib/useModal.ts'
import customAxios from 'shared/customAxios.ts'
import {useSearchParams} from 'react-router-dom'

export default function BookViewer() {
    const {isModalOpen, closeModal, openModal} = useModal()
    const [pages, setPages] = useState([])

    const [count, setCount] = useState(1)

    const [searchParams] = useSearchParams()
    const isbn = searchParams.get('isbn')
    const title = searchParams.get('title')

    console.log(pages)

    useEffect(() => {
        openModal()
    }, [])

    useEffect(() => {
        if (!isbn) {
            return
        }
        const getImage = async () => {
            const {data} = await customAxios.get('/book/content', {
                params: {
                    ISBN: isbn,
                    pageId: count,
                    userId: 1,
                },
            })

            setPages(data.content)
        }
        getImage()
    }, [count])

    const handleNext = () => {
        setCount((prev) => prev + 1)
    }

    const handlePrev = () => {
        setCount((prev) => prev - 1)
    }

    return (
        <Container>
            <Wrapper>
                <Title>{title}</Title>
                <Content>
                    <Left onClick={handlePrev}>
                        <p>{pages[0]?.content}</p>
                        <img width={'80%'} src={pages[0]?.imgUrl} alt="" />
                    </Left>
                    <Right onClick={handleNext}>
                        <p>{pages[1]?.content}</p>
                        <img width={'80%'} src={pages[1]?.imgUrl} alt="" />
                    </Right>
                </Content>
            </Wrapper>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <img src="/images/cel.svg" alt="다독이" />
                <ModalText>
                    {'다음 페이지로 넘길 땐 오른쪽 페이지를,\n' +
                        '이전 페이지로 돌아갈 땐 왼쪽 페이지를\n' +
                        '눌러주세요!'}
                </ModalText>
                <ModalClose onClick={closeModal}>
                    <img src="/images/x.svg" alt="닫기" />
                </ModalClose>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #f3f3f3;
    width: 100%;
    height: 530px;
    padding: 0 5% 5% 5%;
`

const Title = styled.h1`
    font-size: ${({theme}) => theme.fontSize.lg};
    text-align: center;
    height: fit-content;
    line-height: 3rem;
`

const Content = styled.div`
    border: 1px solid black;
    display: flex;
    flex: 1;
    background-color: white;
    border-radius: 10px;
    padding: 5%;
`

const Left = styled.div`
    border-right: 1px solid black;
    flex: 1;
    white-space: pre-wrap;
    line-height: 1.3rem;
    overflow-y: auto;
    height: 406px;
    padding-right: 5%;
`

const Right = styled.div`
    flex: 1;
    white-space: pre-wrap;
    overflow-y: auto;
    line-height: 1.3rem;
    height: 406px;
    margin-left: 5%;
`

const customStyles = {
    content: {
        top: '10%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        display: 'flex',
        gap: '5px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(198, 198, 198, 0.6)',
    },
}

const ModalText = styled.p`
    white-space: pre;
`

const ModalClose = styled.button`
    align-self: baseline;
`
