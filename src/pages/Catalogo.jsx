import BotonArriba from '../components/BotonArriba';
const imagenes = import.meta.glob(
  '../img/catalogo/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  {
    eager: true,
    query: '?url',
    import: 'default'
  }
);

function Catalogo() {
  const categorias = [
    { nombre: 'Nueva colección', carpeta: 'Nuevacoleccion' },
    { nombre: 'Accesorios de baño', carpeta: 'Accesoriosdebaño' },
    { nombre: 'Adhesivos y boquillas', carpeta: 'Adhesivosyboquillas' },
    { nombre: 'Asientos', carpeta: 'Asientos' },
    { nombre: 'Boquillas', carpeta: 'Boquillas' },
    { nombre: 'Calentadores', carpeta: 'Calentadores' },
    { nombre: 'Campanas', carpeta: 'Campanas' },
    { nombre: 'Cocinas', carpeta: 'Cocinas' },
    { nombre: 'Decorados', carpeta: 'Decorados' },
    { nombre: 'Duchas', carpeta: 'Duchas' },
    { nombre: 'Espejos', carpeta: 'Espejos' },
    { nombre: 'Estucos y filtros', carpeta: 'Estucosyfiltros' },
    { nombre: 'Fachadas', carpeta: 'Fachadas' },
    { nombre: 'Griferías', carpeta: 'Griferías' },
    { nombre: 'Impermeabilizantes', carpeta: 'Impermeabilizantes' },
    { nombre: 'Lavamanos', carpeta: 'Lavamanos' },
    { nombre: 'Lavaplatos', carpeta: 'Lavaplatos' },
    { nombre: 'Materiales de construcción', carpeta: 'Materialesdeconstruccion' },
    { nombre: 'Molduras', carpeta: 'Molduras' },
    { nombre: 'Muebles de baño', carpeta: 'Mueblesdebaño' },
    { nombre: 'Muebles para cocina', carpeta: 'Mueblesparacocina' },
    { nombre: 'Paredes', carpeta: 'Paredes' },
    { nombre: 'Pegantes', carpeta: 'Pegantes' },
    { nombre: 'Pinturas', carpeta: 'Pinturas' },
    { nombre: 'Pisos', carpeta: 'Pisos' },
    { nombre: 'Plomería', carpeta: 'Plomeria' },
    { nombre: 'Sanitarios', carpeta: 'Sanitarios' },
    { nombre: 'Tinas e hidromasajes', carpeta: 'Tinasehidromasajes' }
  ];

  const obtenerImagen = (carpeta) => {
    const imagenEncontrada = Object.entries(imagenes).find(([ruta]) =>
      ruta.includes(`/catalogo/${carpeta}/`)
    );

    return imagenEncontrada ? imagenEncontrada[1] : null;
  };

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ color: '#1e7a34', textAlign: 'center', marginBottom: '10px' }}>
        Productos
      </h1>

      <p
        style={{
          textAlign: 'center',
          maxWidth: '700px',
          margin: '0 auto 40px',
          color: '#444',
          lineHeight: '1.6'
        }}
      >
        Como aliados comerciales, ofrecemos una amplia variedad de productos de
        calidad para proyectos de construcción, adecuación y remodelación.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '22px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {categorias.map((categoria) => {
          const imagen = obtenerImagen(categoria.carpeta);

          return (
            <div
              key={categoria.nombre}
              style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.10)';
              }}
            >
              <div
                style={{
                  height: '165px',
                  background: imagen ? '#eee' : '#edf3ee',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}
              >
                {imagen ? (
                  <img
                    src={imagen}
                    alt={categoria.nombre}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div
                    style={{
                      textAlign: 'center',
                      color: '#1e7a34',
                      padding: '15px'
                    }}
                  >
                    <div style={{ fontSize: '30px', marginBottom: '8px' }}>🚧</div>
                    <strong style={{ fontSize: '14px' }}>
                      Categoría en construcción
                    </strong>
                    <p style={{ fontSize: '12px', margin: '5px 0 0' }}>
                      Imagen próximamente
                    </p>
                  </div>
                )}
              </div>

              <div
                style={{
                  padding: '17px 15px',
                  textAlign: 'center',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <h3
                  style={{
                    margin: '0 0 12px',
                    color: '#333',
                    fontSize: '16px',
                    minHeight: '38px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {categoria.nombre}
                </h3>

                <span
                  style={{
                    color: '#1e7a34',
                    fontWeight: '600',
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  Ver productos →
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <BotonArriba />
    </div>
  );
}

export default Catalogo;