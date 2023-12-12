import { render, screen } from '@testing-library/react'
import { Store } from '../../pages/Store'
import storeItems from '../../data/items.json'
import { ShoppingCartProvider } from '../../context/ShoppingCartContext'

test('render Store Component', () => {
  render(
    <ShoppingCartProvider>
      <Store />
    </ShoppingCartProvider>
  )

  expect(screen.getByText('Store-Page')).toBeInTheDocument
  expect(screen.getAllByTestId('store-item-card')).toHaveLength(
    storeItems.length
  )
})
