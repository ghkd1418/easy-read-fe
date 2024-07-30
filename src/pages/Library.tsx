import styled from 'styled-components'
import Modal from 'react-modal'
import {useModal} from 'features/simplification/lib/useModal.ts'
import {Button} from 'features/simplification/ui/Button.tsx'

export default function Library() {
    const {isModalOpen, closeModal, openModal} = useModal()
    const handleClick = () => {
        openModal()
    }

    return (
        <Container>
            <TextAreaContainer>
                <BookContainer>
                    <BookImg src="/images/book.png" alt="시선으로부터." />
                    <HoverText onClick={handleClick}>부탁하기</HoverText>
                </BookContainer>
            </TextAreaContainer>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <img height={'50%'} src="/images/book.png" alt="" />
                <ModalContent>
                    <ModalTitle>시선으로부터</ModalTitle>
                    <ModalSubTitle>정세랑</ModalSubTitle>
                    <ModalText>
                        {
                            '데뷔 10년, 장르를 넘나들며 다양한 방식으로 이야기를 펼쳐내면서도\n 우리를 단 한 번도 실망시킨 적이 없는 정세랑 작가가 돌아왔다. \n구상부터 완성까지 5년이 걸린 대작으로, \n한국일보문학상을 수상한 이후 4년 만에 내놓는 신작 장편소설이다. '
                        }
                    </ModalText>
                    <ModalClose onClick={closeModal}>
                        <img src="/images/x.svg" alt="닫기" />
                    </ModalClose>
                    <Button size={'md'}>읽기 쉬운 책 부탁하기</Button>
                </ModalContent>
            </Modal>
        </Container>
    )
}

const Container = styled.div`
    padding: 6% 6%;
    border: 5px solid #f3f3f3;
    height: 406px;
`

const TextAreaContainer = styled.section`
    display: flex;
    gap: 10%;
    height: 100%;
    flex-wrap: wrap;
    position: relative;
`

const BookContainer = styled.div`
    position: relative;
    height: 50%;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

const BookImg = styled.img`
    height: 100%;
    width: 100%;
    display: block;
`

const HoverText = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;

    ${BookContainer}:hover & {
        opacity: 0.9;
    }
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10%;
    height: 100%;
`

const ModalTitle = styled.h1`
    font-size: ${({theme}) => theme.fontSize.lg};
    font-weight: bold;
`

const ModalSubTitle = styled.h3`
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: bold;
`

const ModalText = styled.p`
    white-space: pre;
`

const ModalClose = styled.button`
    position: absolute;
    right: 5%;
    top: 5%;
`

const customStyles = {
    content: {
        width: '90%',
        height: '50%',

        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        display: 'flex',
        gap: '5%',
        justifyContent: 'center',
        alignItems: 'center',

        padding: '5%',

        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(198, 198, 198, 0.6)',
    },
}
