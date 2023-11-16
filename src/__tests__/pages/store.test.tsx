import { render, screen } from '@testing-library/react'
import { Store } from '../../pages/Store'

test('render About Component', () => {
  render(<Store />)

  expect(screen.getByText('Store-Page')).toBeInTheDocument
})
