import styled from 'styled-components'
import {Button} from 'features/simplification/ui/Button.tsx'

export default function RequestBook() {
    return (
        <Container>
            <SearchWrapper>
                <InputWrapper>
                    <Label htmlFor="title">책 제목</Label>
                    <Input placeholder={'책의 제목을 써주세요.'} type="text" id={'title'} />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="author">저자</Label>
                    <Input placeholder={'책을 쓴 사람의 이름을 써주세요.'} type="text" id={'author'} />
                </InputWrapper>
                <InputWrapper>
                    <Label htmlFor="publisher">출판사</Label>
                    <Input placeholder={'책을 만든 출판사의 이름을 써주세요.'} type="text" id={'publisher'} />
                </InputWrapper>
                <Button size={'md'}>책 검색하기</Button>
            </SearchWrapper>
            <ResultWrapper></ResultWrapper>
        </Container>
    )
}

const Container = styled.main`
    border: 5px solid #f3f3f3;
    height: 406px;
    display: flex;
`

const SearchWrapper = styled.section`
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
`
