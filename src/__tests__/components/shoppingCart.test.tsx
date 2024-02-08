import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Store } from '../../pages/Store'
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext'

beforeAll(() => {
  render(
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/store" element={<Store />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
})

it('should display cart items when items are added to the cart', async () => {
  const storeLink = screen.getByRole('store-link-test')
  await userEvent.click(storeLink)

  const addToCartButton = screen.getAllByRole('add-to-cart-button')
  await fireEvent.click(addToCartButton[0])
  const incCartBtn = screen.getByRole('increment-cart-button')
  await fireEvent.click(incCartBtn)

  await fireEvent.click(addToCartButton[1])

  const navCartButton = screen.getByTestId('navbar-cart-button')
  await userEvent.click(navCartButton)

  expect(screen.getByTestId('cart-slider-screen-wrapper')).toBeInTheDocument()
  expect(screen.getAllByTestId('cart-item-wrapper')).toHaveLength(2)

  expect(screen.getByTestId('total-cart-value')).toHaveTextContent(
    'US$1,220.98'
  )

  const offcanvasCloseBtn = screen.getByTestId('offcanvas-slider-close-button')
  await fireEvent.click(offcanvasCloseBtn)
  expect(
    screen.queryByTestId('cart-slider-screen-wrapper')
  ).not.toBeInTheDocument()
})
