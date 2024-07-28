import {useEffect} from 'react'
import TabBar from 'app/layouts/TabBar.tsx'
import styled from 'styled-components'
import Modal from 'react-modal'
import {useModal} from 'features/simplification/lib/useModal.ts'

export default function BookViewer() {
    const {isModalOpen, closeModal, openModal} = useModal()

    useEffect(() => {
        // const getImage = async () => {
        //     const responseImageUrl = await customAxios.get('/karlo?keyword=happy')
        //     console.log('responseImageUrl', responseImageUrl)
        // }
        // getImage()
        openModal()
    }, [])

    return (
        <Container>
            <TabBar />
            <Wrapper>
                <Title>책 제목</Title>
                <Content>
                    <Left></Left>
                    <Right></Right>
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
`

const Left = styled.div`
    border-right: 1px solid black;
    flex: 1;
`

const Right = styled.div`
    flex: 1;
`

const customStyles = {
    content: {
        top: '5%',
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
