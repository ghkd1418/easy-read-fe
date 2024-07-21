import {useState} from 'react'
import {useNavigate} from 'react-router'

export const useFile = () => {
    const [files, setFiles] = useState<File[]>([])
    const [isLoading] = useState(false)
    const [output] = useState('')

    const navigate = useNavigate()

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiles(Array.from(e.target.files || []))
    }

    const handleDelete = (index: number) => {
        setFiles([...files.slice(0, index), ...files.slice(index + 1)])
    }

    const handleSubmit = () => {
        // setIsLoading(true)
        navigate('/view')

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
