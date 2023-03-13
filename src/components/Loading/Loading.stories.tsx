import { Story } from '@storybook/react'
import { t } from 'i18next'

import { Loading } from './Loading'

export default {
    component: Loading,
    title: 'Components/Loading',
    args: {}
}

const Template: Story = (args) => <Loading {...args} />

export const Default = Template.bind({})

const TemplateSmall: Story = (args) => <Loading {...args} />

export const Small = TemplateSmall.bind({})
Small.args = {
    size: 'sm'
}

const TemplateMedium: Story = (args) => <Loading {...args} />

export const Medium = TemplateMedium.bind({})
Medium.args = {
    size: 'md'
}

const TemplateBigger: Story = (args) => <Loading {...args} />

export const Bigger = TemplateBigger.bind({})
Bigger.args = {
    size: 'bg'
}