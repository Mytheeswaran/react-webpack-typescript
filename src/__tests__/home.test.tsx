import { render } from '@testing-library/react'
import { Home } from '../pages/Home'

test('renders Home component', () => {
  const { getByText } = render(<Home />)
  expect(getByText('Home')).toBeInTheDocument()
})
