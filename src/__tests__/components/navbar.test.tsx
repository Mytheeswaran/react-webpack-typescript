import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
// import { Navbar } from '../../components/Navbar'
import '../../styles.css'
import { App } from '../../App'

import { BrowserRouter } from 'react-router-dom'

test('renders navbar component', async () => {
  render(
    <BrowserRouter>
      <App />
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
  expect(screen.getByText('Store-Page')).toBeInTheDocument

  const aboutLink = screen.getByRole('about-link-test')
  await userEvent.click(aboutLink)
  expect(screen.getByText('About-Page')).toBeInTheDocument

  const homeLink = screen.getByRole('home-link-test')
  await userEvent.click(homeLink)
  expect(screen.getByText('Home-Page')).toBeInTheDocument
})
