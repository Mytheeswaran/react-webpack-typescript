import { render, screen } from '@testing-library/react'
import { About } from '../../pages/About'

test('render About Component', () => {
  render(<About />)

  expect(screen.getByText('About-Page')).toBeInTheDocument
})
