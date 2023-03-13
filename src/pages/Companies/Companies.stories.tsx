import { Story } from '@storybook/react'

import Companies from './Companies'

export default {
    component: Companies,
    title: 'Pages/Companies',
    args: {}
}

const Template: Story = (args) => <Companies {...args} />

export const Default = Template.bind({})
