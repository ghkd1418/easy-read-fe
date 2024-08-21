import {RefObject, useCallback} from 'react'

function useScrollToSection(): (ref: RefObject<HTMLDivElement>) => void {
    const scrollToSection = useCallback((ref: RefObject<HTMLDivElement>) => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }, [])

    return scrollToSection
}

export default useScrollToSection
