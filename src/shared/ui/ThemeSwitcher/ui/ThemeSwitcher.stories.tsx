import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/Providers/ThemeProvider';
import { ThemesSwitcher } from './ThemeSwitcher';

export default {
    title: 'widgets/ThemesSwitcher',
    component: ThemesSwitcher,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ThemesSwitcher>;

const Template: ComponentStory<typeof ThemesSwitcher> = (args) => (
    <ThemesSwitcher {...args} />
);

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
