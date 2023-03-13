import { faker } from '@faker-js/faker'
import { Story } from '@storybook/react'
import { Image } from 'antd';

import { Card } from './Card'

export default {
    component: Card,
    title: 'Components/Card',
    args: {}
}

const Template: Story = (args) => (
    <Card {...args}>
        Card storybook children
    </Card>
)

export const Default = Template.bind({})

const TemplateBordered: Story = (args) => (
    <Card {...args}>
        Card storybook children
    </Card>
)

export const Bordered = TemplateBordered.bind({})
Bordered.args = {
    bordered: true
}

const Templatecover: Story = (args) => (
    <Card {...args}>
        Card storybook children
    </Card>
)

export const cover = Templatecover.bind({})
cover.args = {
    cover: (
        <Image
            preview={false}
            height={576}
            src={faker.image.abstract()}
        />
    )
}

const TemplateHoverable: Story = (args) => (
    <Card {...args}>
        Card storybook children
    </Card>
)

export const Hoverable = TemplateHoverable.bind({})
Hoverable.args = {
    hoverable: true
}

const TemplateWithTitle: Story = (args) => (
    <Card {...args}>
        Card storybook children
    </Card>
)

export const WithTitle = TemplateWithTitle.bind({})
WithTitle.args = {
    title: 'Card title'
}