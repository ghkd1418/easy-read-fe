import TextArea from '../features/simplification/ui/InputField.tsx'
import {useTextArea} from '../features/simplification/lib/useTextArea.ts'
import {Button} from '../features/simplification/ui/Button.tsx'
import styled from 'styled-components'
import useCopy from '../shared/useCopy.ts'
import {LoadingSpinner} from 'shared/LoadingSpinner.tsx'
import {useState} from 'react'
import {useFile} from 'features/simplification/lib/useFile.ts'

export default function Home() {
    const {input, output, handleInputChange, handleSubmit, isLoading, handleKeyDown} = useTextArea()
    const {htmlRef, handleCopy} = useCopy()
    const [mode, setMode] = useState<'file' | 'text'>('text')

    const {files, handleChange, handleDelete} = useFile()

    console.log(files)

    const handleSwitch = () => {
        setMode((prev) => (prev === 'file' ? 'text' : 'file'))
    }

    return (
        <Container>
            <Title>글 맞추기</Title>
            <button onClick={handleSwitch}>switch</button>
            <TextAreaContainer>
                <TextAreaWrapper>
                    {mode === 'text' ? (
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
                    ) : (
                        <FileInputContainer>
                            <p>
                                pdf 파일을 추천합니다!
                                <br />
                                <br /> pdf(피디에프), hwp(한글 파일), docx(워드) 파일을 올릴 수 있어요.
                            </p>
                            <input type="file" multiple onChange={handleChange} />
                            {!!files.length &&
                                files.map((file, index) => (
                                    <li>
                                        <p key={index}>{file.name}</p>
                                        <button onClick={() => handleDelete(index)}>삭제</button>
                                    </li>
                                ))}
                        </FileInputContainer>
                    )}
                    <Button onClick={handleSubmit}>직접 글 쓰기</Button>
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
    padding: 10% 6%;
`

const Title = styled.h1`
    margin-bottom: 5%;
    font-weight: 800;
    font-size: 64px;
    text-align: center;
`

const TextAreaContainer = styled.section`
    display: flex;
    gap: 10%;
    height: 300px;

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
    height: 200px;
    width: 100%;
    background-color: white;
    outline: none;
    padding: 20px;
    border: 1px solid #a8a8a8;

    scrollbar-width: none;

    font-family: 'Pretendard', sans-serif;
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

const FileInputContainer = styled.div`
    border-radius: 12px;
    resize: none;
    height: 120px;
    width: 100%;
    background-color: #f5f5f5;
    padding: 20px;
`
