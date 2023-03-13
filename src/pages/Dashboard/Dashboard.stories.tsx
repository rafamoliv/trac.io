import { Story } from '@storybook/react'

import Dashboard from './Dashboard'

export default {
    component: Dashboard,
    title: 'Pages/Dashboard',
    args: {}
}

const Template: Story = (args) => <Dashboard {...args} />

export const Default = Template.bind({})
