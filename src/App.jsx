import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CoachingPage from './pages/CoachingPage'
import LaneRentalsPage from './pages/LaneRentalsPage'
import SpecialEventsPage from './pages/SpecialEventsPage'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/lane-rentals" element={<LaneRentalsPage />} />
          <Route path="/special-events" element={<SpecialEventsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
