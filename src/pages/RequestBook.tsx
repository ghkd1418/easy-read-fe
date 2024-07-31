// RequestBook.tsx
import styled from 'styled-components'
import {Button} from 'features/simplification/ui/Button.tsx'
import {useBookSearch} from 'features/search/useBookSearch.ts'

export default function RequestBook() {
    const {title, setTitle, author, setAuthor, publisher, setPublisher, results, handleSearch} = useBookSearch()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        handleSearch()
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
                            <BookContainer key={book.isbn} status={book.status}>
                                <img src={book.cover} alt={`${book.title} cover`} />
                                <h3>{book.title}</h3>
                                <p>{book.author}</p>
                                <Status status={book.status}>{statusLabels[book.status]}</Status>
                            </BookContainer>
                        ))}
                    </BookList>
                ) : (
                    <p>책을 검색해보세요.</p>
                )}
            </ResultWrapper>
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
