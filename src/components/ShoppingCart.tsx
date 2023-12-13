import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ShoppingCartItem } from '../components/ShoppingCartItem'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'
import { ItemType } from '../types/item'

export type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCartContext()
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton={true}>
        <Offcanvas.Title>Your cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems &&
            cartItems.map((item) => {
              return <ShoppingCartItem key={item.id} {...item} />
            })}
          <div className="ms-auto fw-bold fs-5">
            Total:{' '}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item: ItemType | undefined = storeItems.find(
                  (storeItem) => storeItem.id === cartItem.id
                )
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

// (item?.price || 0) is equal to (item ? item.price : 0)
