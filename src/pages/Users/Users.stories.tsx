import { Story } from '@storybook/react'

import Users from './Users'

export default {
    component: Users,
    title: 'Pages/Users',
    args: {}
}

const Template: Story = (args) => <Users {...args} />

export const Default = Template.bind({})
