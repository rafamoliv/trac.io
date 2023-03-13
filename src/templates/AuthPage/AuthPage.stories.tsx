import { Story } from '@storybook/react'

import AuthPage from './AuthPage'

export default {
    component: AuthPage,
    title: 'Templates/AuthPage',
    args: {}
}

const Template: Story = (args) => <AuthPage {...args} />

export const Default = Template.bind({})
