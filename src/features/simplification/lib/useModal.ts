import {useEffect, useState} from 'react'

export const useModal = () => {
    const [isModalOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true)
    }

    function closeModal() {
        setIsOpen(false)
    }

    useEffect(() => {
        // openModal()
    }, [])

    return {closeModal, openModal, isModalOpen}
}
