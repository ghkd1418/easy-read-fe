// RequestBook.tsx
import styled from 'styled-components'
import {Button} from 'features/simplification/ui/Button.tsx'
import {Book, useBookSearch} from 'features/search/useBookSearch.ts'
import {useModal} from 'features/simplification/lib/useModal.ts'
import Modal from 'react-modal'
import customAxios from 'shared/customAxios.ts'
import {FormEvent, useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function RequestBook() {
    const {title, setTitle, author, setAuthor, publisher, setPublisher, results, handleSearch} = useBookSearch()
    const {isModalOpen, closeModal, openModal} = useModal()
    const [bookInfo, setBookInfo] = useState<Book | null>(null)
    const navigation = useNavigate()

    const handleClick = async (book: Book) => {
        openModal()
        const {data} = await customAxios.get('/book/info', {
            params: {
                isbn: book.isbn,
            },
        })

        setBookInfo(data)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSearch()
    }

    const handlePush = async (isbn: string, title: string) => {
        await customAxios.post('/request', {
            userId: 1,
            isbn,
        })

        navigation(`/request-book/success?isbn=${isbn}&title=${title}`)
    }

    return (
        <Container>
            <SearchWrapper onSubmit={handleSubmit}>
                <InputWrapper>
                    <Label htmlFor="title">책 제목</Label>
                    <Input
                        placeholder={'책의 제목을 써주세요.'}
                        type="text"
                        id={'title'}
                        value={title}
                        maxLength={25}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="author">저자</Label>
                    <Input
                        placeholder={'책을 쓴 사람의 이름을 써주세요.'}
                        type="text"
                        id={'author'}
                        value={author}
                        maxLength={10}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="publisher">출판사</Label>
                    <Input
                        placeholder={'책을 만든 출판사의 이름을 써주세요.'}
                        type="text"
                        id={'publisher'}
                        value={publisher}
                        maxLength={10}
                        onChange={(e) => setPublisher(e.target.value)}
                    />
                </InputWrapper>
                <Button size={'md'} type="submit">
                    책 검색하기
                </Button>
            </SearchWrapper>
            <ResultWrapper>
                {results.length > 0 ? (
                    <BookList>
                        {results.map((book) => (
                            <BookWrapper>
                                <BookContainer key={book.isbn} status={book.status}>
                                    <img src={book.cover} alt={`${book.title} cover`} />
                                    <h3>{book.title}</h3>
                                    <p>{book.author}</p>
                                    <Status status={book.status}>{statusLabels[book.status]}</Status>
                                </BookContainer>
                                <HoverText onClick={() => handleClick(book)}>부탁하기</HoverText>
                            </BookWrapper>
                        ))}
                    </BookList>
                ) : (
                    <p>책을 검색해보세요.</p>
                )}
            </ResultWrapper>
            <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
                <ModalImage height={'50%'} src={bookInfo?.cover} alt={bookInfo?.title} />
                <ModalContent>
                    <ModalTitle>{bookInfo?.title}</ModalTitle>
                    <ModalSubTitle>{bookInfo?.author}</ModalSubTitle>
                    <ModalText>{bookInfo?.description}</ModalText>
                    <ModalClose onClick={closeModal}>
                        <img src="/images/x.svg" alt="닫기" />
                    </ModalClose>
                    <Button onClick={() => handlePush(bookInfo?.isbn, bookInfo?.title)} size={'md'}>
                        읽기 쉬운 책 부탁하기
                    </Button>
                </ModalContent>
            </Modal>
        </Container>
    )
}

const statusLabels: {[key: string]: string} = {
    Y: '현재 글맞춤 도서관 있음',
    R: '의뢰 중',
    N: '글맞춤 도서관에 없음',
}

const Container = styled.main`
    border: 5px solid #f3f3f3;
    height: 406px;
    display: flex;
`

const SearchWrapper = styled.form`
    border-right: 5px solid #f3f3f3;
    flex: 1;
    padding: 3% 3%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > button {
        margin-top: 10%;
    }
`

const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const Label = styled.label`
    font-size: ${({theme}) => theme.fontSize.md};
    font-weight: 500;
`

const Input = styled.input`
    line-height: 2.5rem;
    border-radius: 15px;
    border: 1px solid #a8a8a8;
    padding-left: 5%;
    font-size: ${({theme}) => theme.fontSize.md};
`

const ResultWrapper = styled.section`
    flex: 1;
    padding: 3% 3%;
    overflow-x: auto;
    white-space: nowrap;
`

const BookList = styled.div`
    display: flex;
    gap: 20px;
`

const BookContainer = styled.div<{status: string}>`
    flex: 1 1 auto; /* Grow and shrink as needed */
    min-width: 200px; /* Set a minimum width */
    max-width: 25%; /* Adjust as needed */
    box-sizing: border-box;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;

    &:hover {
        background-color: red;
        cursor: pointer;
    }

    img {
        width: 100%;
        height: auto;
    }

    h3 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: 10px 0;
    }

    p {
        font-size: 1rem;
        margin: 5px 0;
    }
`

const Status = styled.p<{status: string}>`
    font-size: 0.9rem;
    font-weight: 500;
    color: ${({status}) => getStatusColor(status)};
`

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Y':
            return '#219C90'
        case 'R':
            return '#FFC55A'
        case 'N':
            return '#fc4100'
        default:
            return '#000000'
    }
}

const BookWrapper = styled.div`
    position: relative;
    height: 50%;
    cursor: pointer;

    &:hover {
        opacity: 0.7;
    }
`

const HoverText = styled.div`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.3s;

    ${BookWrapper}:hover & {
        opacity: 0.9;
    }
`

const ModalImage = styled.img`
    flex: 0.5;
`

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;
    gap: 10%;
    height: 100%;
    width: 30%;
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
    white-space: white-space;
`

const ModalClose = styled.button`
    position: absolute;
    right: 2%;
    top: 2%;
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
        // justifyContent: 'center',
        // alignItems: 'center',
        color: 'black',

        padding: '5%',

        overflowX: 'scroll',
    },
    overlay: {
        backgroundColor: 'rgba(198, 198, 198, 0.6)',
    },
}
