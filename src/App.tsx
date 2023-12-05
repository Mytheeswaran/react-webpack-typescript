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
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { AuthContextProvider } from './context/AuthContext'
import { AuthCheck } from './pages/AuthCheck'

export const App = (): JSX.Element => {
  return (
    <AuthContextProvider>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/auth-check" element={<AuthCheck />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </AuthContextProvider>
  )
}
