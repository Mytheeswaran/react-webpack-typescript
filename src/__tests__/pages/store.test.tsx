import { render, screen } from '@testing-library/react'
import { Store } from '../../pages/Store'
import storeItems from '../../data/items.json'

test('render About Component', () => {
  render(<Store />)

  expect(screen.getByText('Store-Page')).toBeInTheDocument
  expect(screen.getAllByTestId('store-item-card')).toHaveLength(
    storeItems.length
  )
})
