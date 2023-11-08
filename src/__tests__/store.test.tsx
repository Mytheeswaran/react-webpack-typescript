import { render } from '@testing-library/react'
import { Store } from '../pages/Store'

test('renders Home component', () => {
  const { getByText } = render(<Store />)
  expect(getByText('Store')).toBeInTheDocument()
})
