import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFounndPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFounndPageProps {
    className?: string
}

export const NotFounndPage = ({ className }: NotFounndPageProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.NotFounndPage, {}, [className])}>
            {t('Страница не найдена')}
        </div>
    )
}
