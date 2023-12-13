import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../../components/Navbar'
import '../../styles.css'
import { Home } from '../../pages/Home'
import { Store } from '../../pages/Store'
import { About } from '../../pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShoppingCartProvider } from '../../contexts/ShoppingCartContext'

beforeEach(() => {
  render(
    <BrowserRouter>
      <ShoppingCartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ShoppingCartProvider>
    </BrowserRouter>
  )
})

it('should render navbar with nav HTML container and default Home Page', () => {
  expect(screen.getByTestId('navbar-wrapper')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-link-container')).toBeInTheDocument()
  expect(screen.getByText('Home-Page')).toBeInTheDocument
})

it('should render About-Page on clicking About link', async () => {
  const aboutLink = screen.getByRole('about-link-test')
  await userEvent.click(aboutLink)
  expect(global.window.location.pathname).toContain('/about')
  expect(screen.getByText('About-Page')).toBeInTheDocument
})

it('should render Home-Page on clicking Home link', async () => {
  const homeLink = screen.getByRole('home-link-test')
  await userEvent.click(homeLink)
  expect(global.window.location.pathname).toContain('/')
  expect(screen.getByText('Home-Page')).toBeInTheDocument
})

it('should render Store-Page on clicking Store link', async () => {
  const storeLink = screen.getByRole('store-link-test')
  await userEvent.click(storeLink)
  expect(global.window.location.pathname).toContain('/store')
  expect(screen.getByText('Store-Page')).toBeInTheDocument
})

it('should display Cart Button on clicking add to cart, display cart quantity inside the cart-count segment, hide Cart button on removing cart items completely ', async () => {
  const addToCartButton = screen.getAllByRole('add-to-cart-button')
  await fireEvent.click(addToCartButton[0])

  expect(screen.getByTestId('navbar-cart-button')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-cart-button-svg')).toBeInTheDocument()
  expect(
    screen.getByTestId('navbar-cart-button-cart-count')
  ).toBeInTheDocument()

  const incCartBtn = screen.getByRole('increment-cart-button')
  await fireEvent.click(incCartBtn)
  expect(screen.getByTestId('navbar-cart-button-cart-count')).toHaveTextContent(
    '2'
  )

  const removeFromCartBtn = screen.getByRole('remove-from-cart-button')
  await fireEvent.click(removeFromCartBtn)
  expect(screen.queryByTestId('navbar-cart-button')).not.toBeInTheDocument()
})

// https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
// https://www.youtube.com/watch?v=jYaDpuPQW9M - wrapper method
// https://www.tabnine.com/code/javascript/functions/history/createMemoryHistory
