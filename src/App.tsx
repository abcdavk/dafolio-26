import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
import HomePage from "./pages/home"
import ChangelogPage from "./pages/changelog"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
