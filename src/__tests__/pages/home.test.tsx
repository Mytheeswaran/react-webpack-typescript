import { render, screen } from '@testing-library/react'
import { Home } from '../../pages/Home'

test('render About Component', () => {
  render(<Home />)

  expect(screen.getByText('Home-Page')).toBeInTheDocument
})
