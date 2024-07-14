import {ChangeEvent, useState} from 'react'
import toast from 'react-hot-toast'
import customAxios from 'shared/customAxios.ts'

export const useTextArea = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setInput(e.target.value)
    }

    const getGptAnswer = async (text: string) => {
        const data = await customAxios.get('/karlo', {
            params: {
                keyword: text,
            },
        })
        setIsLoading(false)
        setOutput(data.data)
    }

    const handleSubmit = () => {
        if (input.length === 0) {
            toast.error('바꾸고 싶은 글을 입력해주세요.')
            return
        }
        // setIsLoading(true)
        getGptAnswer(input)
        // setOutput(
        //     'setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)setOutput(data.data)',
        // )
        // translateTextStream(input, (chunk: string) => {
        // setOutput((prev) => prev + chunk)
        // setIsLoading(false)
        // })
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
