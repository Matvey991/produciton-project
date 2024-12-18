import { Navbar } from 'widgets/Navbar';
import { classNames } from 'shared/lib/classNames/classNames';
import { Sidebar } from 'widgets/Sidebar/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { useTheme } from './Providers/ThemeProvider';
import { AppRouter } from './Providers/router';

const App = () => {
    const { theme } = useTheme();
    const dispathc = useDispatch();

    useEffect(() => {
        dispathc(userActions.initAuthData());
    }, [dispathc]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
