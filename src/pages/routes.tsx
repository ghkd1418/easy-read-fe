import {createBrowserRouter} from 'react-router-dom'
import Header from 'app/layouts/Header.tsx'
import NotFound from 'pages/NotFound.tsx'
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
        ],
    },
])

export default router
