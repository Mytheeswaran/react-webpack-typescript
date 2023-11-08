import { render } from '@testing-library/react'
import { About } from '../pages/About'

test('renders Home component', () => {
  const { getByText } = render(<About />)
  expect(getByText('About')).toBeInTheDocument()
})
