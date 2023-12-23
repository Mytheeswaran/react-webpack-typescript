import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../../components/Navbar'
import { Store } from '../../pages/Store'
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext'

beforeEach(() => {
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

it('should click navbar cart button on adding an item to cart', async () => {
  const storeLink = screen.getByRole('store-link-test')
  await userEvent.click(storeLink)

  const addToCartButton = screen.getAllByRole('add-to-cart-button')
  await fireEvent.click(addToCartButton[0])
  const incCartBtn = screen.getByRole('increment-cart-button')
  await fireEvent.click(incCartBtn)

  const navCartButton = screen.getByTestId('navbar-cart-button')
  await userEvent.click(navCartButton)

  expect(screen.getByTestId('cart-slider-screen-wrapper')).toBeInTheDocument()

  expect(screen.getByTestId('cart-item-wrapper')).toBeInTheDocument()
  expect(screen.getByTestId('cart-item-image')).toBeInTheDocument()
  expect(screen.getByTestId('cart-item-description')).toBeInTheDocument()
  expect(screen.getByTestId('cart-item-units')).toBeInTheDocument()
  expect(screen.getByTestId('cart-item-units')).toHaveTextContent('x2')
  expect(screen.getByTestId('cart-item-price-per-unit')).toBeInTheDocument()

  expect(
    screen.getByTestId('cart-item-price-for-all-quantity')
  ).toBeInTheDocument()
  expect(
    screen.getByTestId('cart-item-price-for-all-quantity')
  ).toHaveTextContent('US$21.98')

  expect(screen.getByTestId('delete-cart-item-btn')).toBeInTheDocument()
  const deleteCartButton = screen.getByTestId('delete-cart-item-btn')
  await userEvent.click(deleteCartButton)
  expect(screen.queryByTestId('cart-item-wrapper')).not.toBeInTheDocument()

  const offcanvasCloseBtn = screen.getByTestId('offcanvas-slider-close-button')
  await fireEvent.click(offcanvasCloseBtn)
  expect(
    screen.queryByTestId('cart-slider-screen-wrapper')
  ).not.toBeInTheDocument()
})
