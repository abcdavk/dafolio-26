import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import HomePage from "./pages/home";
import ChangelogPage from "./pages/changelog";
import PricingPage from "./pages/pricing.tsx";
import ProjectsPage from "./pages/projects.tsx";
import NotFound from "./pages/not-found.tsx";
import ProjectPlatinumPage from "./pages/projects/platinum.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/changelog" element={<ChangelogPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/project" element={<ProjectsPage />} />
          <Route path="/project/platinum" element={<ProjectPlatinumPage/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
