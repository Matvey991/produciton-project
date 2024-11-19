import { Navbar } from 'widgets/Navbar'
import './styles/index.scss'
import { AppRouter } from './Providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './Providers/ThemeProvider'
import { Sidebar } from 'widgets/Sidebar/Sidebar'
import { Suspense, useEffect } from 'react'

const App = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback=".">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App
