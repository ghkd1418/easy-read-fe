import {useState} from 'react'
import {readFiles} from 'shared/readFiles.ts'

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
    const [isLoading] = useState(false)
    const [output] = useState('')

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

    const handleSubmit = () => {}

    return {files, handleChange, handleDelete, handleSubmit, isLoading, output, previewImg}
}
