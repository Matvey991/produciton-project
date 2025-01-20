import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/storeDecorator';
import { action } from '@storybook/addon-actions';
import { CommentList } from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

// @ts-ignore
const Template: ComponentStory<typeof AddCommentForm> = (args) => <CommentList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya' },
        },
    ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [StoreDecorator({})];
