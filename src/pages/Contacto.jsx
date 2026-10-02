function Contacto() {
  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ color: '#1e7a34', textAlign: 'center' }}>Contáctanos</h1>
      <p style={{ textAlign: 'center', maxWidth: '600px', margin: '10px auto 40px' }}>
        Estamos listos para ayudarte con tu próximo proyecto de arquitectura
        y construcción. Escríbenos o visítanos, con gusto te atenderemos.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
          alignItems: 'flex-start'
        }}
      >
        {/* Datos de contacto */}
        <div
          style={{
            background: '#fff',
            borderRadius: '12px',
            padding: '25px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            maxWidth: '380px',
            flex: '1 1 320px'
          }}
        >
          <p><strong>📍 Ubicación:</strong><br />Carrera 14 No. 13-31, Barrio Centro, Mitú, Vaupés</p>

          {/* Correo y NIT en tarjetas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <a
              href="mailto:nativaconstructora03@gmail.com"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#eaf5ec',
                borderLeft: '4px solid #1e7a34',
                borderRadius: '8px',
                padding: '12px 15px',
                textDecoration: 'none',
                color: '#1e7a34',
                fontWeight: '600'
              }}
            >
              <span style={{ fontSize: '20px' }}>📧</span>
              nativaconstructora03@gmail.com
            </a>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                background: '#eaf5ec',
                borderLeft: '4px solid #1e7a34',
                borderRadius: '8px',
                padding: '12px 15px',
                color: '#1e7a34',
                fontWeight: '600'
              }}
            >
              <span style={{ fontSize: '20px' }}>🏢</span>
              NIT: 901.029.190-6
            </div>
          </div>

          {/* Redes sociales */}
          <div style={{ marginTop: '20px', marginBottom: '15px' }}>
            <strong>Síguenos:</strong>
            <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
              <a
                href="https://www.instagram.com/nativaconstructora_mitu"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  color: '#fff',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
                title="Instagram"
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100047483545971"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: '#1877F2',
                  color: '#fff',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
                title="Facebook"
              >
                f
              </a>
            </div>
          </div>

          {/* Botones de WhatsApp y correo */}
          <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <a
              href="https://wa.me/573123297943?text=Hola%20Nativa%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                textAlign: 'center',
                padding: '12px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              💬 WhatsApp: 312 329 7943
            </a>
            <a
              href="https://wa.me/573102527167?text=Hola%20Nativa%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: '#25D366',
                color: '#fff',
                textAlign: 'center',
                padding: '12px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              💬 WhatsApp: 310 252 7167
            </a>
            <a
              href="mailto:nativaconstructora03@gmail.com"
              style={{
                background: '#1e7a34',
                color: '#fff',
                textAlign: 'center',
                padding: '12px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              ✉️ Escribir correo
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div
          style={{
            flex: '1 1 400px',
            maxWidth: '600px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
          }}
        >
          <iframe
            title="Ubicación Nativa"
            src="https://www.google.com/maps?q=1.2579109,-70.2364125&z=17&t=k&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contacto;