import {useState} from 'react'
import {readFiles} from 'shared/readFiles.ts'
import customAxios from 'shared/customAxios.ts'

const PDF_IMAGE_URL = '/images/pdf.svg'
const processFileDataURL = (dataURL: string): string => {
    if (dataURL.startsWith('data:application')) {
        return PDF_IMAGE_URL
    } else if (dataURL.startsWith('data:image')) {
        return dataURL
    }
    return PDF_IMAGE_URL
}
export const useFile = () => {
    const [files, setFiles] = useState<File[]>([])
    const [previewImg, setPreviewImg] = useState<string>()
    const [isLoading, setIsLoading] = useState(false)
    const [output, setOutput] = useState('')

    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            setFiles(Array.from(files))
            const previews = await readFiles(files)
            const previewUrl = processFileDataURL(previews[0])

            setPreviewImg(previewUrl)
        }
    }

    const handleDelete = (index: number) => {
        setFiles([...files.slice(0, index), ...files.slice(index + 1)])
        setPreviewImg('')
    }

    const handleSubmit = async (type: string) => {
        setIsLoading(true)
        try {
            const formData = new FormData()
            console.log(files[0])
            formData.append(type, files[0])

            const response = await customAxios.post(`/text/${type}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })

            const {data} = response
            console.log(data.text)
            setOutput(data.text)
        } catch (error) {
            console.error('Error submitting files:', error)
        } finally {
            setIsLoading(false)
        }
    }

    return {files, handleChange, handleDelete, handleSubmit, isLoading, output, previewImg}
}
