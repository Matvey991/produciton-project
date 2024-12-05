import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { loginActions } from 'features/AuthByUsername/modal/slice/loginSlice';
import { getLoginState } from 'features/AuthByUsername/modal/selectors/getLoginState/getLoginState';
import { loginByUsename } from 'features/AuthByUsername/modal/services/loginByUsername/loginByUsername';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispathc = useDispatch();
    const {
        username, password, isLoading, error,
    } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispathc(loginActions.setUsername(value));
    }, [dispathc]);

    const onChangePassword = useCallback((value: string) => {
        dispathc(loginActions.setPassword(value));
    }, [dispathc]);

    const onLoginClick = useCallback(() => {
        dispathc(loginByUsename({ username, password }));
    }, [dispathc, username, password]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error && <Text text={t('Вы ввели неверный логин или пароль')} theme={TextTheme.ERROR} />}
            <Input
                autoFocus
                placeholder={t('Введите логин')}
                className={cls.input}
                type="text"
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('Введите пароль')}
                className={cls.input}
                type="text"
                onChange={onChangePassword}
                value={password}
            />
            <Button
                disabled={isLoading}
                onClick={onLoginClick}
                theme={ThemeButton.OUTLINE}
                className={cls.loginBtn}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
