import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Login } from '../../pages/Login'

beforeAll(() => {
  render(<Login />)

  const nativeFetch = window.fetch
  // 1. Request interception.React to any outgoing requests.

  window.fetch = async (input, init) => {
    const request = new Request('http://localhost:4000/movies')
    // 2. Request matching. Check if we should respond to the intercepted request using mocks.
    if (request.method === 'get' || request.url.endsWith('/movies')) {
      // 3. Mocked response. Manually construct a Fetch API Response instance and resolve the request promise with it.
      return Response.json([
        { title: 'The Godfather' },
        { title: 'The Lord of The Rings' },
        { title: 'The Dark Knight' },
      ])
    }
    return nativeFetch(input, init)
  }
})

test('render Login Component', async () => {
  // expect(screen.getByText('Login Form')).toBeInTheDocument
  // expect(screen.getByText('Email address')).toBeInTheDocument
  // expect(screen.getByText('Password')).toBeInTheDocument
  // expect(screen.getByTestId('login-button-test')).toBeInTheDocument
  screen.debug()
  // const loginButton = screen.getByTestId('login-button-test')
  // userEvent.click(loginButton)

  const movies = await fetch('/movies').then((res) => res.json())
  console.log('movies', movies)
})

// ref: https://egghead.io/blog/understanding-api-mocking-request-interception-algorithms
