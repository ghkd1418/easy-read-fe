import TextArea from '../features/simplification/ui/InputField.tsx'
import {useTextArea} from '../features/simplification/lib/useTextArea.ts'
import {Button} from '../features/simplification/ui/Button.tsx'
import styled from 'styled-components'
import useCopy from '../shared/useCopy.ts'
import {LoadingSpinner} from 'shared/LoadingSpinner.tsx'

export default function SimplificationText() {
    const {input, output, handleInputChange, handleSubmit, isLoading, handleKeyDown} = useTextArea()
    const {htmlRef, handleCopy} = useCopy()

    return (
        <Container>
            <Title>글 맞추기</Title>
            <TextAreaContainer>
                <TextAreaWrapper>
                    <StyledTextArea
                        onChange={handleInputChange}
                        value={input}
                        onKeyDown={handleKeyDown}
                        maxLength={500}
                        autoFocus
                        placeholder={
                            '읽고싶은 글이나 문장을 이곳에 써주세요.\n' + '복사한 글을 이곳에 ‘붙여넣기’ 해보세요.'
                        }
                        spellCheck={false}
                    />
                    <Button size={'md'} onClick={handleSubmit}>
                        직접 글 쓰기
                    </Button>
                </TextAreaWrapper>
                <OutTextAreaWrapper>
                    {isLoading ? (
                        <LoadingContainer>
                            <LoadingSpinner />
                        </LoadingContainer>
                    ) : (
                        <>
                            <StyledOutputTextArea ref={htmlRef} value={output} readOnly />
                            <CopyButton onClick={handleCopy}>
                                <img src="/images/copy.svg" alt="복사하기" />
                            </CopyButton>
                        </>
                    )}
                </OutTextAreaWrapper>
            </TextAreaContainer>
        </Container>
    )
}

const Container = styled.div`
    padding: 6% 6%;
`

const Title = styled.h1`
    margin-bottom: 5%;
    font-weight: 800;
    font-size: 44px;
    text-align: center;
`

const TextAreaContainer = styled.section`
    display: flex;
    gap: 10%;
    height: 100%;

    flex-wrap: wrap;
    position: relative;
`

const TextAreaWrapper = styled.div`
    position: relative;
    flex: 1;

    width: 100%;
`

const OutTextAreaWrapper = styled.div`
    position: relative;
    flex: 1;
    width: 100%;
    border: 1px solid #a8a8a8;
    border-radius: 12px;
`

const StyledTextArea = styled(TextArea)`
    border-radius: 12px;
    resize: none;
    height: 170px;
    width: 100%;
    background-color: white;
    outline: none;
    padding: 20px;
    border: 1px solid #a8a8a8;
    gap: 10%;

    scrollbar-width: none;

    font-family: 'Pretendard', sans-serif;
    font-size: 16px;
`

const StyledOutputTextArea = styled(StyledTextArea)`
    &:focus {
        outline: none;
    }

    scrollbar-width: thin;
    border: none;
    height: 100%;
`

const CopyButton = styled.button`
    width: 7%;

    position: absolute;
    top: 5px;
    right: 5px;
`

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`
