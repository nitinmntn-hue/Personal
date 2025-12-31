import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.scss';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import TechStack from './pages/TechStack';
import NotFound from './pages/NotFound';
import Footer from "./components/Footer";
import RainBackground from "./components/RainBackground";

function App() {
  return (
    <>
      <div className="app-container">
        <BrowserRouter>
          <Navbar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<TechStack />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>

          <RainBackground />
    </>
  )
}

export default App;
