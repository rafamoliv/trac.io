import { Story } from '@storybook/react'
import { t } from 'i18next'

import SystemPage from './SystemPage'

export default {
    component: SystemPage,
    title: 'Templates/SystemPage',
    args: {}
}

const Template: Story = (args) => (
    <SystemPage.Root {...args} />
)

export const Default = Template.bind({})

const TemplateWithHeader: Story = (args) => (
    <SystemPage.Root>
        <SystemPage.Header {...args} />
    </SystemPage.Root>
)

export const WithHeader = TemplateWithHeader.bind({})
WithHeader.args = {
    title: t('pgDashboard:title')
}