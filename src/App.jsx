import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import AboutUsPage from './pages/AboutUsPage'
import CoachingPage from './pages/CoachingPage'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/coaching" element={<CoachingPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
