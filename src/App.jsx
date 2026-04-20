import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'

import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Booking from './pages/Booking'
import MotorcycleRepair from './pages/MotorcycleRepair'
import MotorcycleService from './pages/MotorcycleService'
import OilChange from './pages/OilChange'
import BrakeService from './pages/BrakeService'
import EngineRepair from './pages/EngineRepair'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Layout>
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/motorcycle-repair-bali" element={<MotorcycleRepair />} />
          <Route path="/motorcycle-service-bali" element={<MotorcycleService />} />
          <Route path="/oil-change-bali" element={<OilChange />} />
          <Route path="/brake-service-bali" element={<BrakeService />} />
          <Route path="/engine-repair-bali" element={<EngineRepair />} />
        </Routes>
      </Layout>
    </Router>
    </HelmetProvider>
  )
}

export default App
