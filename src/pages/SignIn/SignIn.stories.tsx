import { Story } from '@storybook/react'

import SignIn from './SignIn'

export default {
    component: SignIn,
    title: 'Pages/SignIn',
    args: {}
}

const Template: Story = (args) => <SignIn {...args} />

export const Default = Template.bind({})
