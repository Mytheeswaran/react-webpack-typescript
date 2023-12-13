import { render, screen } from '@testing-library/react'
import { Home } from '../../pages/Home'

test('render Home Component', () => {
  render(<Home />)

  expect(screen.getByText('Home-Page')).toBeInTheDocument
})
