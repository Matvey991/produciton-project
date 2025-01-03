import { fetchProfileData, ProfileCard, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/userAppDispatch/useAppDispatch';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
className?: string;
}

const ProfilePage = memo(({ className }: ProfilePageProps) => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUmnount>
            <div className={classNames('', {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
});

export default ProfilePage;
