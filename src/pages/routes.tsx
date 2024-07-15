import {createBrowserRouter} from 'react-router-dom'
import Header from 'app/layouts/Header.tsx'
import NotFound from 'pages/NotFound.tsx'
import SimplificationText from 'pages/SimplificationText.tsx'
import SimplificationFile from 'pages/SimplificationFile.tsx'
import Home from 'pages/Home.tsx'

const router = createBrowserRouter([
    {
        element: <Header />,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/simplification/text',
                element: <SimplificationText />,
            },
            {
                path: '/simplification/file',
                element: <SimplificationFile />,
            },
        ],
    },
])

export default router
