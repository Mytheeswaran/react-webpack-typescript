import { render, screen } from '@testing-library/react'
import { StoreItem, StoreItemProps } from '../../components/StoreItem'

test('renders store item component with details', () => {
  const storeItemMock: StoreItemProps = {
    id: 1,
    name: 'banana',
    price: 14000,
    imgUrl: '/imgs/banana.jpg',
  }

  render(<StoreItem {...storeItemMock} />)

  expect(screen.getByTestId('store-item-card')).toBeInTheDocument
  expect(screen.getByTestId('store-item-card-image')).toBeInTheDocument
  expect(screen.getByText('banana')).toBeInTheDocument
  // expect(screen.getByTestId('add-to-cart-button')).toBeInTheDocument
  expect(screen.getByTestId('decrement-cart-button')).toBeInTheDocument
  expect(screen.getByTestId('cart-quantity-value')).toHaveTextContent('1')
  expect(screen.getByTestId('increment-cart-button')).toBeInTheDocument
  expect(screen.getByTestId('remove-from-cart-button')).toBeInTheDocument
})
