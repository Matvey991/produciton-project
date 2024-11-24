import { render } from 'react-dom'
import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import 'shared/config/i18n/i18n'
import { ErrorBoundary } from 'app/Providers/ErrorBoundary'
import { ThemeProvider } from 'app/Providers/ThemeProvider/ui/themeProvider'

render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById('root')
)
