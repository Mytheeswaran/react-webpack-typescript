import { Button, Stack } from 'react-bootstrap'
import {
  CartItem,
  useShoppingCartContext,
} from '../contexts/ShoppingCartContext'
import storeItems from '../data/items.json'
import { ItemType } from '../types/item'
import { formatCurrency } from '../utilities/formatCurrency'

export function ShoppingCartItem({ id, quantity }: CartItem) {
  const { removeFromCart } = useShoppingCartContext()
  const cartItem: ItemType | undefined = storeItems.find(
    (item) => item.id === id
  )

  if (cartItem == null) return null

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center"
      data-testid="cart-item-wrapper"
    >
      <img
        src={cartItem ? cartItem.imgUrl : ''}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
        data-testid="cart-item-image"
      />
      <div className="me-auto">
        <div data-testid="cart-item-description">
          {cartItem.name}{' '}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{ fontSize: '.65rem' }}
              data-testid="cart-item-units"
            >
              x{quantity}
            </span>
          )}
        </div>
        <div>
          <span
            className="text-muted"
            style={{ fontSize: '.75rem' }}
            data-testid="cart-item-price-per-unit"
          >
            {formatCurrency(cartItem.price)}
          </span>
        </div>
      </div>
      <div data-testid="cart-item-price-for-all-quantity">
        {formatCurrency(cartItem.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
        data-testid="delete-cart-item-btn"
      >
        &times;
      </Button>
    </Stack>
  )
}

// &times; gives x symbol inside a button like a close button
