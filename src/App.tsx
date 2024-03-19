import React from 'react'
import './styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'

import { GlobalStyle } from './globalStyles'
import { Signup } from './pages/SignupPage'
import { Pricing } from './pages/PricingPage'

export const App = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
