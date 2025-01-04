import React from 'react';
import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/Vector.svg';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import i18next from 'i18next';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: i18next.t('Главная'),
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: i18next.t('О сайте'),
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: i18next.t('Профиль'),
        authOnly: true,
    },
];
