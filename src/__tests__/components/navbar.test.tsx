import { render, screen } from '@testing-library/react'
import { Navbar } from '../../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

test('renders navbar component', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  )
  expect(screen.getByTestId('navbar-wrapper')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-link-container')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-cart-button')).toBeInTheDocument()
  expect(screen.getByTestId('navbar-cart-button-svg')).toBeInTheDocument()
  expect(
    screen.getByTestId('navbar-cart-button-cart-count')
  ).toBeInTheDocument()
})
