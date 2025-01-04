import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarIcon from './programmer-icon-line-color-illustration-vector.jpg';

export default {
    title: 'shared/AppLink',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: 150,
    src: AvatarIcon,
};

export const Small = Template.bind({});
Primary.args = {
    size: 50,
    src: AvatarIcon,
};
