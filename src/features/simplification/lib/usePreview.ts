import {useState} from 'react'
import {readFiles} from 'shared/readFiles.ts'

export const usePreview = () => {
    const [postImg, setPostImg] = useState<File[]>([])
    const [previewImg, setPreviewImg] = useState<string[]>([])

    const uploadFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files
        if (files) {
            setPostImg(Array.from(files))
            const previews = await readFiles(files)
            setPreviewImg(previews)
        }
    }

    return {postImg, previewImg, uploadFile}
}
