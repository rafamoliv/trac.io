import React from 'react'
import i18next from 'i18next'
import { expect, it } from 'vitest'

import { render } from '../../utils/tests'

import { Card } from '.'

const props = {
    children: i18next.t('translation:foo')
}

describe('<Card />', () => {
    describe('Component Snapshot', () => {
        it('render element', () => {
            const { container } = render(<Card {...props} />)
            expect(container.firstChild).toMatchSnapshot()
        })
    })
})
