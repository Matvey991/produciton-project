import { Story } from '@storybook/react'

export const ThemeDecorator = (theme: any) => (StoryComponent: Story) =>
    (
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    )
