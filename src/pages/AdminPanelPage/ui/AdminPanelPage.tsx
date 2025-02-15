import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'shared/ui/Page/Page';

const AdminPanelPage = memo(() => {
    const { t } = useTranslation();
    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
});

export default AdminPanelPage;
