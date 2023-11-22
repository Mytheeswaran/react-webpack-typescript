import { render, screen } from '@testing-library/react'
import { StoreItem, StoreItemProps } from '../../components/StoreItem'

test('renders store item component with details', () => {
  const storeItemMock: StoreItemProps = {
    id: 1,
    name: 'banana',
    price: 23,
    imgUrl: '/imgs/banana.jpg',
  }

  render(<StoreItem {...storeItemMock} />)

  expect(screen.getByTestId('store-item-card')).toBeInTheDocument
  expect(screen.getByTestId('store-item-card-image')).toBeInTheDocument
  expect(screen.getByText('banana')).toBeInTheDocument
  expect(screen.getByText('23')).toBeInTheDocument
})
