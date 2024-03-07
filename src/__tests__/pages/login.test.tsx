import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from '../../pages/Login'

beforeAll(() => {
  render(<Login />)
})

test('render Login Component', async () => {
  // expect(screen.getByText('Login Form')).toBeInTheDocument
  // expect(screen.getByText('Email address')).toBeInTheDocument
  // expect(screen.getByText('Password')).toBeInTheDocument
  // expect(screen.getByTestId('login-button-test')).toBeInTheDocument
  const loginButton = screen.getByTestId('login-button-test')
  const dataRes = await userEvent.click(loginButton)
  expect(dataRes).toHaveLength(2)
})
