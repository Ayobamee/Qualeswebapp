import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Landing from './pages/Landing'
import About from './pages/About'
import Talents from './pages/Talents'
import Companies from './pages/Companies'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
