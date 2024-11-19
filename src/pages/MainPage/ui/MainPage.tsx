import { BugButton } from 'app/Providers/ErrorBoundary/ui/BugButton'
import { useTranslation } from 'react-i18next'

const MainPage = () => {
    const { t } = useTranslation('main')

    return (
        <div>
            {t('Главная страница')}
            <div>
                <BugButton />
            </div>
        </div>
    )
}

export default MainPage
