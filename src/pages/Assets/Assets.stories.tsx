import { Story } from '@storybook/react'

import Assets from './Assets'

export default {
    component: Assets,
    title: 'Pages/Assets',
    args: {}
}

const Template: Story = (args) => <Assets {...args} />

export const Default = Template.bind({})
