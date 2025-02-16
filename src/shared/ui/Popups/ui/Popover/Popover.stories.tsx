import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { Popover } from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => <div style={{ padding: 100 }}><Story /></div>,
    ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    trigger: (
        <Button>
            КНОПКА
        </Button>
    ),
    direction: 'bottom right',
    children: (
        <div>
            <Text title="Уведомление 1" text="Описание уведомления 1" />
            <Text title="Уведомление 2" text="Описание уведомления 2" />
            <Text title="Уведомление 3" text="Описание уведомления 3" />
        </div>
    ),
};
