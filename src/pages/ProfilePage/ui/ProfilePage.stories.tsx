import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/storeDecorator/storeDecorator';
import avatar from '@/shared/assets/tests/programmer-icon-line-color-illustration-vector.jpg';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import ProfilePage from './ProfilePage';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

// @ts-ignore
const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: {
        form: {
            first: 'asd',
            lastName: 'asd',
            age: 23,
            username: 'admin',
            city: 'fdsa',
            country: Country.Russia,
            currency: Currency.RUB,
            avatar,
        },
    },
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        form: {
            first: 'asd',
            lastName: 'asd',
            age: 23,
            username: 'admin',
            city: 'fdsa',
            country: Country.Russia,
            currency: Currency.RUB,
            avatar,
        },
    },
})];
