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
})
