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
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={cartItem ? cartItem.imgUrl : ''}
        style={{ width: '125px', height: '75px', objectFit: 'cover' }}
      />
      <div className="me-auto">
        <div>
          {cartItem.name}{' '}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: '.65rem' }}>
              x{quantity}
            </span>
          )}
        </div>
        <div>
          <span className="text-muted" style={{ fontSize: '.75rem' }}>
            {formatCurrency(cartItem.price)}
          </span>
        </div>
      </div>
      <div>{formatCurrency(cartItem.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(id)}
      >
        &times;
      </Button>
    </Stack>
  )
}

// &times; gives x symbol inside a button like a close button
