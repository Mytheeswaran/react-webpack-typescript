import { render, screen, fireEvent } from '@testing-library/react'
import { Store } from '../../pages/Store'
import storeItems from '../../data/items.json'
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext'

beforeEach(() => {
  render(
    <ShoppingCartProvider>
      <Store />
    </ShoppingCartProvider>
  )
})

it('should render store page with the number of store item cards matching the store items data length', async () => {
  expect(screen.getByText('Store-Page')).toBeInTheDocument
  expect(screen.getAllByTestId('store-item-card')).toHaveLength(
    storeItems.length
  )
})

it('test to cover all the % lines during unit testing for the funcs increaseCartQuantity() and decreaseCartQuantity()', async () => {
  expect(screen.getByText('Store-Page')).toBeInTheDocument
  expect(screen.getAllByTestId('store-item-card')).toHaveLength(
    storeItems.length
  )

  const addToCartButton = screen.getAllByRole('add-to-cart-button')
  await fireEvent.click(addToCartButton[0])
  await fireEvent.click(addToCartButton[1])

  const incCartButton = screen.getAllByRole('increment-cart-button')
  await fireEvent.click(incCartButton[0])

  const decCartButton = screen.getAllByRole('decrement-cart-button')
  await fireEvent.click(decCartButton[0])
})
