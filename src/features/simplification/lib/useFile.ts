import {useState} from 'react'

export const useFile = () => {
    const [files, setFiles] = useState<File[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [output] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(Array.from(e.target.files || []))
    }

    const handleDelete = (index: number) => {
        setFiles([...files.slice(0, index), ...files.slice(index + 1)])
    }

    const handleSubmit = () => {
        setIsLoading(true)
        console.log('submit')
    }

    return {
        files,
        handleChange,
        handleDelete,
        handleSubmit,
        isLoading,
        output,
    }
}
