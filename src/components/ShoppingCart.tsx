import { Offcanvas, Stack } from 'react-bootstrap'
import { useShoppingCartContext } from '../contexts/ShoppingCartContext'
import { ShoppingCartItem } from '../components/ShoppingCartItem'
import { formatCurrency } from '../utilities/formatCurrency'
import storeItems from '../data/items.json'
import { ItemType } from '../types/item'
import { useCallback } from 'react'

export type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems } = useShoppingCartContext()

  // The below ref is to set data-testid = offcanvas-slider-cross-button to a button ele inside offcanvas bootstrap library
  // So first accessing the parent element Offcanvas.Header using ref and traversing to the child button using class (btn-close) and setting our testid attribute
  const offCanvasHeaderRef: (element: HTMLDivElement) => void = useCallback<
    (element: HTMLElement) => void
  >((element: HTMLElement) => {
    if (element) {
      element
        .querySelector('.btn-close')
        ?.setAttribute('data-testid', 'offcanvas-slider-close-button')
    }
  }, [])

  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      data-testid="cart-slider-screen-wrapper"
    >
      <Offcanvas.Header closeButton={true} ref={offCanvasHeaderRef}>
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
// element.querySelector('.btn-close')?.setAttribute('data-testid', 'offcanvas-slider-cross-button') is equal to element.children[1].setAttribute('data-testid', 'cart-item-cross-button')
