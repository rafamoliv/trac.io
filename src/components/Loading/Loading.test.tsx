import React from 'react'
import i18next from 'i18next'
import { expect, it } from 'vitest'

import { render } from '../../utils/tests'

import { Loading } from '.'

const props = {
    children: i18next.t('translation:foo'),
    loading: true
}

describe('<Loading />', () => {
    describe('Component Render', () => {
        it('render element', () => {
            const { container } = render(<Loading {...props} />)
            expect(container.firstChild).toMatchSnapshot()
        })
    })
})
