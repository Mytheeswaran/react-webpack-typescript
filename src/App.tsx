import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './contexts/ShoppingCartContext'
import { AuthContextProvider } from './contexts/AuthContext'
import { AuthCheck } from './pages/AuthCheck'
import { ProtectedRoute } from './components/ProtectedRoute'

import { GlobalStyle } from './globalStyles'
import { Signup } from './pages/SignupPage'
import { Pricing } from './pages/PricingPage'

export const App = (): JSX.Element => {
  return (
    <AuthContextProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute accessBy="non-authenticated-users">
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/auth-check"
              element={
                <ProtectedRoute accessBy="authenticated-users">
                  <AuthCheck />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </AuthContextProvider>
  )
}
