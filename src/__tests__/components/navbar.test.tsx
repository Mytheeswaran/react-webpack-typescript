import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '../../components/Navbar'
import '../../styles.css'
import { Home } from '../../pages/Home'
import { Store } from '../../pages/Store'
import { About } from '../../pages/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

test('renders navbar component', async () => {
  render(
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
  expect(screen.getByTestId('navbar-wrapper')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-link-container')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-cart-button')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-cart-button-svg')).toBeInTheDocument()
  expect(
    screen.getByTestId('navbar-cart-button-cart-count')
  ).toBeInTheDocument()

  expect(screen.getByText('Home-Page')).toBeInTheDocument

  const storeLink = screen.getByRole('store-link-test')
  await userEvent.click(storeLink)
  expect(global.window.location.pathname).toContain('/store')
  expect(screen.getByText('Store-Page')).toBeInTheDocument

  const aboutLink = screen.getByRole('about-link-test')
  await userEvent.click(aboutLink)
  expect(global.window.location.pathname).toContain('/about')
  expect(screen.getByText('About-Page')).toBeInTheDocument

  const homeLink = screen.getByRole('home-link-test')
  await userEvent.click(homeLink)
  expect(global.window.location.pathname).toContain('/')
  expect(screen.getByText('Home-Page')).toBeInTheDocument
})
// https://medium.com/@antonybudianto/react-router-testing-with-jest-and-enzyme-17294fefd303
// https://www.youtube.com/watch?v=jYaDpuPQW9M - wrapper method
// https://www.tabnine.com/code/javascript/functions/history/createMemoryHistory
