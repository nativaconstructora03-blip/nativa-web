import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

function BotonArriba() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const manejarScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', manejarScroll);
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const subirArriba = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={subirArriba}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        background: '#1e7a34',
        color: '#fff',
        border: 'none',
        borderRadius: '50px',
        padding: '12px 18px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
        zIndex: 999,
        transition: 'background 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.background = '#166028')}
      onMouseLeave={(e) => (e.currentTarget.style.background = '#1e7a34')}
    >
      <FaArrowUp size={14} />
      Arriba
    </button>
  );
}

export default BotonArriba;