import TextArea from '../features/simplification/ui/InputField.tsx'
import {Button} from '../features/simplification/ui/Button.tsx'
import styled from 'styled-components'
import useCopy from '../shared/useCopy.ts'
import {LoadingSpinner} from 'shared/LoadingSpinner.tsx'
import {useFile} from 'features/simplification/lib/useFile.ts'

export default function SimplificationFile() {
    const {htmlRef, handleCopy} = useCopy()
    const {handleChange, handleDelete, handleSubmit, isLoading, output, previewImg} = useFile()

    return (
        <Container>
            <TextAreaContainer>
                <TextAreaWrapper>
                    <FileInputContainer>
                        {previewImg ? (
                            <PreviewWrapper>
                                <PreviewImg src={previewImg} alt="미리보기" />
                                <button onClick={() => handleDelete(1)}>
                                    <DeleteImg src="/images/close.svg" alt="삭제" />
                                </button>
                            </PreviewWrapper>
                        ) : (
                            <PreviewWrapper>
                                <AcceptImg src="/images/accept.png" alt="허용확장자" />
                                <InputLabel htmlFor="select-file">파일을 선택해주세요</InputLabel>
                                <FileInput
                                    type="file"
                                    id="select-file"
                                    onChange={handleChange}
                                    accept=".pdf, .jpeg, .jpg, .gif, .png"
                                />
                            </PreviewWrapper>
                        )}
                    </FileInputContainer>
                    <Button size={'md'} onClick={() => handleSubmit('image')}>
                        이미지 바꾸기
                    </Button>
                    <Button size={'md'} onClick={() => handleSubmit('pdf')}>
                        pdf 바꾸기
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

const TextAreaWrapper = styled.div`
    position: relative;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    max-height: 100%;
`

const OutTextAreaWrapper = styled.div`
    position: relative;
    flex: 1.3;
    width: 100%;
    border: 1px solid #a8a8a8;
    border-radius: 12px;
`

const StyledTextArea = styled(TextArea)`
    border-radius: 12px;
    resize: none;
    height: 100%;
    width: 100%;
    background-color: white;
    outline: none;
    padding: 20px;
    border: 1px solid #a8a8a8;

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

const FileInputContainer = styled.div`
    border-radius: 12px;
    height: 100%;
    width: 100%;
    background-color: #f5f5f5;
    padding: 20px;

    flex: 1;

    outline: none;
    gap: 10%;

    scrollbar-width: none;

    font-family: 'Pretendard', sans-serif;
    font-size: 16px;

    position: relative;
    box-sizing: border-box;
`

const PreviewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    width: 100%;
`

const DeleteImg = styled.img`
    width: 24px;

    position: absolute;
    top: 5px;
    right: 5px;
`

const PreviewImg = styled.img`
    width: 60%;
`

const AcceptImg = styled.img`
    width: 100%;
`

const InputLabel = styled.label`
    background-color: ${({theme}) => theme.colors.secondary};
    font-weight: 500;
    cursor: pointer;
    display: flex;
    height: 20%;
    width: 50%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;

    &:hover {
        font-weight: bold;
        opacity: 0.9;
    }
`

const FileInput = styled.input`
    display: none;
`
