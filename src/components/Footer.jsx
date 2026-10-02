import { FaFacebook, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaIdCard } from 'react-icons/fa';

function Footer() {
  return (
    <footer style={{ background: '#1e2a22', color: '#fff', padding: '45px 20px 20px', marginTop: '50px' }}>
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '30px'
        }}
      >
        {/* Columna 1: Marca */}
        <div>
          <h3 style={{ color: '#4ea866', marginBottom: '10px' }}>NATIVA ARQ</h3>
          <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#cfd8d3' }}>
            Diseñamos el presente. Construimos lo que viene.
          </p>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
            <a
              href="https://www.facebook.com/profile.php?id=100047483545971"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff' }}
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/nativaconstructora_mitu"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff' }}
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://wa.me/573123297943"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff' }}
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={20} />
            </a>
          </div>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h4 style={{ marginBottom: '12px' }}>Enlaces</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li><a href="/" style={{ color: '#cfd8d3', textDecoration: 'none', fontSize: '14px' }}>Inicio</a></li>
            <li><a href="/nosotros" style={{ color: '#cfd8d3', textDecoration: 'none', fontSize: '14px' }}>Nosotros</a></li>
            <li><a href="/servicios" style={{ color: '#cfd8d3', textDecoration: 'none', fontSize: '14px' }}>Servicios</a></li>
            <li><a href="/catalogo" style={{ color: '#cfd8d3', textDecoration: 'none', fontSize: '14px' }}>Productos</a></li>
            <li><a href="/contacto" style={{ color: '#cfd8d3', textDecoration: 'none', fontSize: '14px' }}>Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h4 style={{ marginBottom: '12px' }}>Contacto</h4>
          <p style={{ fontSize: '14px', color: '#cfd8d3', display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '10px' }}>
            <FaMapMarkerAlt style={{ marginTop: '3px' }} />
            Carrera 14 No. 13-31, Barrio Centro, Mitú, Vaupés
          </p>
          <p style={{ fontSize: '14px', color: '#cfd8d3', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <FaEnvelope /> nativaconstructora03@gmail.com
          </p>
          <p style={{ fontSize: '14px', color: '#cfd8d3', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
            <FaWhatsapp /> 312 329 7943 / 310 252 7167
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: '1px solid #3a4a3f',
          marginTop: '35px',
          paddingTop: '18px',
          textAlign: 'center',
          fontSize: '13px',
          color: '#9aa79e'
        }}
      >
        © {new Date().getFullYear()} NATIVA ARQ. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;