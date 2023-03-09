import { screen } from '@testing-library/react'

import { render } from '@/utils/tests'

import Dashboard from './Dashboard'

it('should test', () => {
  render(<Dashboard />)
  expect(
    screen.getByRole('heading', { name: 'Boilerplate Vite + React' })
  ).toMatchSnapshot()
})
