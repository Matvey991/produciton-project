import { classNames } from 'shared/lib/classNames/classNames'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
// Компонент для тестирования ErrorBoundary

export const BugButton = () => {
    const [error, setError] = useState(false)
    const { t } = useTranslation()
    const onThrow = () => {
        setError(true)
    }

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    return (
        <button style={{ cursor: 'pointer' }} onClick={onThrow}>
            {t('Создать ошибку')}
        </button>
    )
}
