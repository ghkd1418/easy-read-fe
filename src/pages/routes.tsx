import {createBrowserRouter} from 'react-router-dom'
import Header from 'app/layouts/Header.tsx'
import NotFound from 'pages/NotFound.tsx'
import SimplificationText from 'pages/SimplificationText.tsx'
import SimplificationFile from 'pages/SimplificationFile.tsx'
import Simplification from 'pages/Simplification.tsx'
import Home from 'pages/Home.tsx'
import BookViewer from 'pages/BookViewer.tsx'

const router = createBrowserRouter([
    {
        path: '/simplification/*',
        element: <Header logoSrc="/images/dadog_tr.png" title="글 맞추기" subtitle="어려운 글을 읽기 쉽게 바꿔요" />,
        errorElement: <NotFound />,
        children: [
            {
                path: '',
                element: <Simplification />,
            },
            {
                path: 'text',
                element: <SimplificationText />,
            },
            {
                path: 'file',
                element: <SimplificationFile />,
            },
        ],
    },
    {
        path: '/',
        element: <Header logoSrc="/images/logo_image.svg" />,
        children: [
            {
                path: '',
                element: <Home />,
            },
        ],
    },
    {
        path: '/',
        children: [
            {
                path: 'view',
                element: <BookViewer />,
            },
        ],
    },
    {
        path: '*', // Catch-all route for NotFound component
        element: <NotFound />,
    },
])

export default router
