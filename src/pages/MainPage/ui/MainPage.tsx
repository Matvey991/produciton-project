import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/shared/ui/Page/Page';
import { StarRating } from '@/shared/ui/StarRating/StarRating';
import { RatingCard } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            {t('Главная страница')}
            <RatingCard title="Как вам статья" feedBackTitle="Оставьте ваш отзыв о статье" hasFeedBack />
        </Page>
    );
});

export default MainPage;
