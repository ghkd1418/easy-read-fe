import {ChangeEvent, useState} from 'react'
import toast from 'react-hot-toast'

export const useTextArea = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }

    const getGptAnswer = async (text: string) => {
        const eventSource = new EventSource(
            `http://ec2-54-180-248-249.ap-northeast-2.compute.amazonaws.com:8080/gpt/stream?text=${encodeURIComponent(text)}`,
        )

        eventSource.onmessage = (event) => {
            try {
                const parsedData = JSON.parse(event.data)
                const messageContent = parsedData.choices[0]?.delta?.content || ''
                const finishReason = parsedData.choices[0]?.finish_reason

                // messageContent 가 있으면 loading(true)로 설정
                if (messageContent) {
                    setIsLoading(false)
                }

                if (finishReason === 'stop') {
                    eventSource.close()
                    return
                }

                setOutput((prevOutput) => prevOutput + messageContent)
            } catch (error) {
                console.error('Error parsing message:', error)
            }
        }

        eventSource.onerror = (error) => {
            console.error('EventSource failed:', error)
            eventSource.close()
            setIsLoading(false) // 에러 발생 시 로딩 상태를 false로 설정
        }

        return () => {
            eventSource.close()
        }
    }

    const handleSubmit = () => {
        if (input.length === 0) {
            toast.error('바꾸고 싶은 글을 입력해주세요.')
            return
        }
        setIsLoading(true)
        getGptAnswer(input)
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault()
            handleSubmit()
        }
    }

    return {
        input,
        output,
        isLoading,
        handleInputChange,
        handleSubmit,
        handleKeyDown,
    }
}
