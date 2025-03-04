import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { NotificationList } from './NotificationList';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
Primary.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставьте лайк и напишите комментарий',
                },
            ],
        },
    ],
};

export const ThemeDark = Template.bind({});
ThemeDark.args = {};
ThemeDark.decorators = [StoreDecorator({}), ThemeDecorator(Theme.DARK)];
ThemeDark.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставьте лайк и напишите комментарий',
                },
            ],
        },
    ],
};

export const ThemeOrange = Template.bind({});
ThemeOrange.args = {};
ThemeOrange.decorators = [StoreDecorator({}), ThemeDecorator(Theme.ORANGE)];
ThemeOrange.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    id: '1',
                    title: 'Уведомление',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '2',
                    title: 'Уведомление 2',
                    description: 'Поставьте лайк и напишите комментарий',
                },
                {
                    id: '3',
                    title: 'Уведомление 3',
                    description: 'Поставьте лайк и напишите комментарий',
                },
            ],
        },
    ],
};
