import { useRef } from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import { useAuthContext } from '../contexts/AuthContext'

export function Login(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const email: any = useRef('')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const password: any = useRef('')
  const { loginApiCall } = useAuthContext()

  // const loginHandler = async () => {
  //   const payload = {
  //     email: email.current.value,
  //     password: password.current.value,
  //   }
  //   await loginApiCall(payload)
  // }

  const loginHandler = async () => {
    const movies = await fetch('/movies').then((res) => res.json())
    console.log(movies) // [{"title": "The Godfather"}, ...]
  }

  return (
    <>
      <Container className="mt-2">
        <Row>
          <Col className="col-md-8 offset-md-2">
            <legend>Login Form</legend>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" ref={email}></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={password}></Form.Control>
            </Form.Group>
            <Button
              variant="primary"
              type="button"
              onClick={loginHandler}
              data-testid="login-button-test"
            >
              Login
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

{
  /* 
   Project for sample authentication server: https://github.com/Naveen512/NestJS.JWT.Auth.Cookie.Mock.API
  */
}
