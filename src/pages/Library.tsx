import styled from 'styled-components'
import Modal from 'react-modal'
import {useModal} from 'features/simplification/lib/useModal.ts'
import {Button} from 'features/simplification/ui/Button.tsx'
import {useEffect, useRef, useState} from 'react'
import {Book} from 'features/search/useBookSearch.ts'
import {useLocation, useNavigate} from 'react-router-dom'
import customAxios from 'shared/customAxios.ts'

export default function Library() {
    const {isModalOpen, closeModal, openModal} = useModal()

    const location = useLocation()

    const section1Ref = useRef<HTMLDivElement>(null)
    const section2Ref = useRef<HTMLDivElement>(null)
    const section3Ref = useRef<HTMLDivElement>(null)
    // 해시값에 따라 해당 섹션으로 스크롤하는 함수
    const scrollToSection = (hash: string) => {
        const sectionRefs = {
            '#section0': section1Ref,
            '#section1': section2Ref,
            '#section2': section3Ref,
        }
        sectionRefs[hash]?.current?.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        if (location.hash) {
            scrollToSection(location.hash)
        }
    }, [location])
    const handleClick = () => {
        openModal()
    }

    const [IngBook, setIngBook] = useState<Book[]>([])
    const [IngBook1, setIngBook1] = useState<Book[]>([])
    const [IngBook2, setIngBook2] = useState<Book[]>([])
    const navigation = useNavigate()

    console.log(IngBook)

    useEffect(() => {
        const fetchRequested = async () => {
            const {data} = await customAxios.get('/book/recent')
            setIngBook(data)
        }

        const fetchRequested1 = async () => {
            const {data} = await customAxios.get('/book/view')
            setIngBook1(data)
        }
        const fetchRequested2 = async () => {
            const {data} = await customAxios.get('/book/recommend')
            setIngBook2(data)
        }

        fetchRequested()
        fetchRequested1()
        fetchRequested2()
    }, [])

    const handleView = (isbn, title) => {
        navigation(`/my/view?isbn=${isbn}&title=${title}`)
    }

    return (
        <Container>
            <Title ref={section1Ref}>새로 들어온 책</Title>
            <BookWrapper>
                {IngBook.map((book) => (
                    <BookDiv onClick={() => handleView(book.isbn, book.title)} key={book?.isbn}>
                        <BookImg src={book?.cover} alt={book?.title} />
                        <BookTitle>{book?.title}</BookTitle>
                        <BookAuthor>{book?.author}</BookAuthor>
                    </BookDiv>
                ))}
            </BookWrapper>
            <Title ref={section2Ref}>인기 많은 책</Title>
            <BookWrapper>
                {IngBook1.map((book) => (
                    <BookDiv onClick={handleView} key={book?.isbn}>
                        <BookImg src={book?.cover} alt={book?.title} />
                        <BookTitle>{book?.title}</BookTitle>
                        <BookAuthor>{book?.author}</BookAuthor>
                    </BookDiv>
                ))}
            </BookWrapper>
            <Title ref={section3Ref}>다독이가 추천하는 리스트</Title>
            <BookWrapper>
                {IngBook2.map((book) => (
                    <BookDiv onClick={handleView} key={book?.isbn}>
                        <BookImg src={book?.cover} alt={book?.title} />
                        <BookTitle>{book?.title}</BookTitle>
                        <BookAuthor>{book?.author}</BookAuthor>
                    </BookDiv>
                ))}
            </BookWrapper>

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
    overflow-y: auto;
    scrollbar-width: none;
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

const BookImg = styled.img`
    height: 150px;
`

const BookWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;

    gap: 5%;
    row-gap: 20px;
`

const BookDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    gap: 5px;

    &:hover {
        cursor: pointer;
        opacity: 0.9;
    }
`

const Title = styled.h1`
    font-weight: 700;
    border-bottom: solid black 1px;
    line-height: 40px;
    height: 40px;
    margin-bottom: 20px;
`

const BookTitle = styled.h2`
    font-weight: bold;
`

const BookAuthor = styled.p`
    color: gray;
`
