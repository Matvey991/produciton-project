import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1>{t('Произошла непредвиденная ошибка')}</h1>
            <button type="button" onClick={reloadPage}>
                {t('Обновить страницу')}
            </button>
            <div>
                <LangSwitcher className={cls.lang} />
            </div>
        </div>
    );
};
