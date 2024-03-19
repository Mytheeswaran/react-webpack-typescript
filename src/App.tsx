import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

import { GlobalStyle } from './globalStyles'
import Navbar from './components/navbar/Navbar'
import { Signup } from './pages/SignupPage'
import { Pricing } from './pages/PricingPage'

export const App = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Router>
  )
}
