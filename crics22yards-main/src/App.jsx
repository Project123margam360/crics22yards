import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CoachingPage from './pages/CoachingPage'
import LaneRentalsPage from './pages/LaneRentalsPage'
import SpecialEventsPage from './pages/SpecialEventsPage'
import ContactUsPage from './pages/ContactUsPage'
import RegistrationPage from './pages/RegistrationPage'
import SummerCampPage from './pages/SummerCampPage'
import './App.css'

function NotFoundPage() {
  return (
    <div style={{ padding: '80px 20px', textAlign: 'center' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <a href="/">Go Back Home</a>
    </div>
  )
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />

          {/* Redirect duplicate home URL */}
          <Route path="/home" element={<Navigate to="/" replace />} />

          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
          <Route path="/lane-rentals" element={<LaneRentalsPage />} />
          <Route path="/special-events" element={<SpecialEventsPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/summer-camp" element={<SummerCampPage />} />

          {/* 404 fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
