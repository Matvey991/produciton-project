import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const MainPage = memo(() => {
    const { t } = useTranslation('main');
    return (
        <Page>
            <Counter />
            {t('Главная страница')}
        </Page>
    );
});

export default MainPage;
