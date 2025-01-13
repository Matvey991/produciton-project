import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articles');
    return (
        // eslint-disable-next-line i18next/no-literal-string
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ARTICLES DETAILS
        </div>
    );
});

export default memo(ArticleDetailsPage);
