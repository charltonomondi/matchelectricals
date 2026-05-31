import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import LearnMore from './pages/LearnMore'
import HighLowVoltage from './pages/services/HighLowVoltage'
import OutdoorLighting from './pages/services/OutdoorLighting'
import SteelStructures from './pages/services/SteelStructures'
import ManLifts from './pages/services/ManLifts'
import Store from './pages/services/Store'
import CurrentProjects from './pages/projects/CurrentProjects'
import Timeline from './pages/projects/Timeline'
import ComingSoon from './pages/projects/ComingSoon'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/learn-more" element={<LearnMore />} />

          {/* Services */}
          <Route path="/services/high-low-voltage" element={<HighLowVoltage />} />
          <Route path="/services/outdoor-public-lighting" element={<OutdoorLighting />} />
          <Route path="/services/steel-structures" element={<SteelStructures />} />
          <Route path="/services/man-lifts-and-cranes" element={<ManLifts />} />
          <Route path="/services/store" element={<Store />} />

          {/* Projects */}
          <Route path="/projects/current" element={<CurrentProjects />} />
          <Route path="/projects/timeline" element={<Timeline />} />
          <Route path="/projects/coming-soon" element={<ComingSoon />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
