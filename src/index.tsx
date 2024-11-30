import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'shared/config/i18n/i18n';
import { ErrorBoundary } from 'app/Providers/ErrorBoundary';
import { ThemeProvider } from 'app/Providers/ThemeProvider';
import App from 'app/App';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/Providers/StoreProvider';

render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
    document.getElementById('root'),
);
