import { render, screen, fireEvent } from '@testing-library/react'
import { StoreItem, StoreItemProps } from '../../components/StoreItem'
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext'

// create a beforeEach function which will render these before each test is called.
beforeEach(() => {
  const storeItemMock: StoreItemProps = {
    id: 1,
    name: 'banana',
    price: 14000,
    imgUrl: '/imgs/banana.jpg',
  }

  render(<StoreItem {...storeItemMock} />, { wrapper: ShoppingCartProvider })
})

it('should render initial item card with Add To Cart button', () => {
  expect(screen.getByTestId('store-item-card')).toBeInTheDocument
  expect(screen.getByTestId('store-item-card-image')).toBeInTheDocument
  expect(screen.getByText('banana')).toBeInTheDocument
  expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument
})

it('should increment and decrement item quantity', async () => {
  const addToCartBtn = screen.getByRole('add-to-cart-button')
  await fireEvent.click(addToCartBtn)
  expect(screen.getByTestId('decrement-cart-button')).toBeInTheDocument
  expect(screen.getByTestId('cart-quantity-value')).toHaveTextContent('1')
  expect(screen.getByTestId('increment-cart-button')).toBeInTheDocument
  expect(screen.getByTestId('remove-from-cart-button')).toBeInTheDocument

  const incCartBtn = screen.getByRole('increment-cart-button')
  await fireEvent.click(incCartBtn)
  expect(screen.getByTestId('cart-quantity-value')).toHaveTextContent('2')

  const decCartBtn = screen.getByRole('decrement-cart-button')
  await fireEvent.click(decCartBtn)
  expect(screen.getByTestId('cart-quantity-value')).toHaveTextContent('1')

  await fireEvent.click(decCartBtn)
  expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument
})

it('should remove item from cart and display Add To Cart button', async () => {
  const addToCartBtn = screen.getByRole('add-to-cart-button')
  await fireEvent.click(addToCartBtn)

  const incCartBtn = screen.getByRole('increment-cart-button')
  await fireEvent.click(incCartBtn)
  await fireEvent.click(incCartBtn)
  expect(screen.getByTestId('cart-quantity-value')).toHaveTextContent('3')

  const removeFromCartBtn = screen.getByRole('remove-from-cart-button')
  await fireEvent.click(removeFromCartBtn)
  expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument
})

// Example user of wrapper attribute for context provider components: { wrapper: ShoppingCartProvider }
