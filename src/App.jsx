import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Servicios from './pages/Servicios';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import FondoPagina from './components/FondoPagina';
import BotonWhatsapp from './components/BotonWhatsapp';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<FondoPagina><Nosotros /></FondoPagina>} />
        <Route path="/servicios" element={<FondoPagina><Servicios /></FondoPagina>} />
        <Route path="/catalogo" element={<FondoPagina><Catalogo /></FondoPagina>} />
        <Route path="/contacto" element={<FondoPagina><Contacto /></FondoPagina>} />
      </Routes>
      <BotonWhatsapp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;