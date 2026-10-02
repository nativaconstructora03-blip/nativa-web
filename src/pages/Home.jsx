import territorioImg from '../img/territorio/1.png';
import proyectoDestacado from '../img/proyecto1/2.jpeg';

function Inicio() {
  return (
    <main>
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          src={territorioImg}
          alt="Puente Urania"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.22
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.75) 45%, rgba(30,122,52,0.88) 100%)'
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: '#111111'
          }}
        />

        <div style={{ position: 'relative', textAlign: 'center', padding: '20px', maxWidth: '800px' }}>
          <h1 style={{ fontSize: '2.4rem', color: '#111' }}>
            Nativa Arquitectura y Construccion S.A.S.
          </h1>
          <p
            style={{
              color: '#1e7a34',
              fontStyle: 'italic',
              fontSize: '1.3rem',
              fontWeight: 'bold',
              marginTop: '12px'
            }}
          >
            Arquitectura con identidad, construyendo futuro.
          </p>
          <p style={{ color: '#333', marginTop: '10px' }}>
            Disenamos desde el territorio. Innovamos para la Amazonia.
          </p>
          <p
            style={{
              color: '#555',
              fontSize: '0.85rem',
              marginTop: '18px',
              letterSpacing: '1px'
            }}
          >
            MITU • VAUPES • AMAZONIA COLOMBIANA
          </p>
        </div>
      </section>

      <section style={{ marginTop: '60px', position: 'relative' }}>
        <img
          src={proyectoDestacado}
          alt="Proyecto destacado"
          style={{
            width: '100%',
            height: '480px',
            objectFit: 'cover'
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '25px',
            background: 'linear-gradient(0deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)'
          }}
        >
          <p
            style={{
              color: '#ffffff',
              fontSize: '1.6rem',
              fontWeight: 'bold',
              textShadow: '0 2px 6px rgba(0,0,0,0.6)'
            }}
          >
            Proyecto destacado: Museo Departamental del Vaupes
          </p>
        </div>
      </section>

      <section
        style={{
          position: 'relative',
          minHeight: '55vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <img
          src={territorioImg}
          alt="Puente Urania"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.2
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0, 
            left: 0,
            width: '100%',
            height: '100%',
            background:
              'linear-gradient(180deg, rgba(30,122,52,0.88) 0%, rgba(255,255,255,0.75) 55%, rgba(255,255,255,0.9) 100%)'
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '6px',
            backgroundColor: '#111111'
          }}
        />

        <div style={{ position: 'relative', textAlign: 'center', padding: '20px', maxWidth: '700px' }}>
          <h2 style={{ color: '#111' }}>Arquitectura que pertenece al territorio</h2>
          <p style={{ color: '#333', marginTop: '12px' }}>
            Cada proyecto de Nativa nace del dialogo entre identidad, territorio y comunidad.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Inicio;