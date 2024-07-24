import router from '../pages/routes.tsx'
import {RouterProvider} from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout.tsx'
import {Toaster} from 'react-hot-toast'
import {ThemeProvider} from 'styled-components'
import theme from 'shared/theme.ts'
import GlobalStyle from 'shared/globalStyles.ts'
import '../reset.css'

function App() {
    return (
        <DefaultLayout>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <RouterProvider router={router} />
            </ThemeProvider>
            <Toaster />
        </DefaultLayout>
    )
}

export default App
