import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logo from '../img/logo/LOGO.png';
import fondoNav from '../img/territorio/3.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-clip">
        <div
          className="navbar-pattern"
          style={{
            backgroundImage: `url(${fondoNav})`
          }}
        />
      </div>

      <div className="navbar-logo">
        <img
          src={logo}
          alt="Nativa Arquitectura y Construccion"
          className="logo-img"
        />
      </div>

      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Inicio
        </NavLink>

        <NavLink to="/nosotros" className={({ isActive }) => isActive ? 'active' : ''}>
          Nosotros
        </NavLink>

        <NavLink to="/servicios" className={({ isActive }) => isActive ? 'active' : ''}>
          Servicios
        </NavLink>

        <NavLink to="/catalogo" className={({ isActive }) => isActive ? 'active' : ''}>
          Productos
        </NavLink>

        <NavLink to="/contacto" className={({ isActive }) => isActive ? 'active' : ''}>
          Contacto
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;