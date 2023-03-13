import { Story } from '@storybook/react'

import Workorders from './Workorders'

export default {
    component: Workorders,
    title: 'Pages/Workorders',
    args: {}
}

const Template: Story = (args) => <Workorders {...args} />

export const Default = Template.bind({})
