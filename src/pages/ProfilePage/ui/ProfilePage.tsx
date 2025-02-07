import { EditableProfileCard } from 'features/editableProfileCard';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';
import { VStack } from 'shared/ui/Stack';
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import {
    EditableProfileCardHeader,
} from 'features/editableProfileCard/ui/EditableProfileCardHeader/EditableProfileCardHeader';

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation('profile');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <Text title={t('Профиль не найден')} />
        );
    }

    return (
        <Page className={classNames('', {}, [className])}>
            <VStack gap="16" max>
                <EditableProfileCard id={id} />
            </VStack>
        </Page>
    );
});

export default ProfilePage;
