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

  expect(screen.getByTestId('navbar-cart-button')).toBeInTheDocument()
  const navCartButton = screen.getByTestId('navbar-cart-button')
  await userEvent.click(navCartButton)

  expect(screen.getByTestId('cart-slider-screen-wrapper')).toBeInTheDocument()
})
