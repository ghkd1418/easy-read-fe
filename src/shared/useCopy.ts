import {useRef} from 'react'
import toast from 'react-hot-toast'

export default function useCopy() {
    const htmlRef = useRef<HTMLTextAreaElement | null>(null)

    const handleCopy = () => {
        if (htmlRef.current) {
            htmlRef.current.select()
            document.execCommand('copy')
            toast('복사 되었습니다.', {
                icon: '📝',
                style: {},
                position: 'top-center',
            })
        }
    }

    return {htmlRef, handleCopy}
}
