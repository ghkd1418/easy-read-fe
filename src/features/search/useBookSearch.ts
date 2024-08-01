// hooks/useBookSearch.ts
import {useState} from 'react'
import customAxios from 'shared/customAxios.ts'

export interface Book {
    author: string
    categoryName: string
    cover: string
    description: string
    isbn: string
    pubDate: string
    publisher: string
    status: string
    title: string
    progress?: string
}

export const useBookSearch = () => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [publisher, setPublisher] = useState('')
    const [results, setResults] = useState<Book[]>([])

    const handleSearch = async () => {
        try {
            const {data} = await customAxios.get(`/book/search`, {
                params: {
                    title,
                    author,
                    publisher,
                },
            })
            setResults(data)
        } catch (error) {
            console.error('Error fetching book data:', error)
        }
    }

    return {
        title,
        setTitle,
        author,
        setAuthor,
        publisher,
        setPublisher,
        results,
        handleSearch,
    }
}
