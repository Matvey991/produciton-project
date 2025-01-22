import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { Article, ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import cls from './ArticlesPage.module.scss';

interface ArticlePageProps {
className?: string;
}

const ArticlesPage = ({ className }: ArticlePageProps) => {
    const { t } = useTranslation('articles');

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            <ArticleList
                isLoading
                view={ArticleView.BIG}
                articles={[]}
            />
        </div>
    );
};

export default memo(ArticlesPage);
