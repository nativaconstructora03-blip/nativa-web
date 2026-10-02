import { FaWhatsapp } from 'react-icons/fa';

function BotonWhatsapp() {
  return (
    <a
      href="https://wa.me/573123297943"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        background: '#25D366',
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
        zIndex: 999,
        transition: 'transform 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
    >
      <FaWhatsapp size={28} color="#fff" />
    </a>
  );
}

export default BotonWhatsapp;