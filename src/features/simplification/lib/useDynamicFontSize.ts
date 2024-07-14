import {useEffect, useState} from 'react'

export default function useDynamicFontSize(length: number): string {
    const [fontSize, setFontSize] = useState<string>('20px')

    useEffect(() => {
        let newFontSize = '20%'

        if (length >= 500) {
            newFontSize = '12px'
        } else if (length >= 300) {
            newFontSize = '15px'
        } else {
            newFontSize = '18px'
        }

        setFontSize(newFontSize)
    }, [length])

    return fontSize
}
