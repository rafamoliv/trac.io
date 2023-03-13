import { Story } from '@storybook/react'

import Settings from './Settings'

export default {
    component: Settings,
    title: 'Pages/Settings',
    args: {}
}

const Template: Story = (args) => <Settings {...args} />

export const Default = Template.bind({})
