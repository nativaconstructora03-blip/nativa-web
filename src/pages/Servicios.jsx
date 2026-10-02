import BotonArriba from '../components/BotonArriba';
import {
  FaDraftingCompass,
  FaHardHat,
  FaRoad,
  FaClipboardCheck,
  FaCouch,
  FaTools,
  FaChalkboardTeacher
} from 'react-icons/fa';

function Servicios() {
  const servicios = [
    {
      Icono: FaDraftingCompass,
      color: '#1e7a34',
      titulo: 'Arquitectura y Diseño',
      subtitulo: 'Ideas que toman forma.',
      parrafos: [
        'Creamos propuestas arquitectónicas contemporáneas, funcionales y adaptadas a las condiciones de cada proyecto.',
        'Diseñamos viviendas, espacios comerciales, institucionales y proyectos de uso colectivo, integrando estética, funcionalidad, contexto y visión de futuro.',
        'Diseñamos para vivir, trabajar, conectar y transformar.'
      ],
      extra: 'Ideal para quienes buscan un diseño único, pensado desde cero para su terreno y su forma de vida.'
    },
    {
      Icono: FaHardHat,
      color: '#c9862a',
      titulo: 'Construcción y Ejecución de Obras',
      subtitulo: 'De los planos a la realidad.',
      parrafos: [
        'Convertimos los diseños en proyectos construidos con planeación, precisión y control.',
        'Desarrollamos obras civiles desde las etapas iniciales de cimentación hasta los acabados finales, articulando talento humano, materiales, tecnología y gestión eficiente de los recursos.',
        'Construimos con propósito y respondemos con resultados.'
      ],
      extra: 'Acompañamos la obra en cada etapa, garantizando cumplimiento de tiempos y calidad de principio a fin.'
    },
    {
      Icono: FaRoad,
      color: '#3b6fa3',
      titulo: 'Infraestructura y Espacio Público',
      subtitulo: 'Conectamos territorios y oportunidades.',
      parrafos: [
        'Participamos en proyectos de infraestructura vial, andenes, urbanismo y espacios públicos, buscando soluciones que respondan a las necesidades reales de las comunidades.',
        'Nuestra visión integra infraestructura, accesibilidad, funcionalidad y respeto por el entorno.',
        'Porque una obra no solo conecta lugares: conecta personas y oportunidades.'
      ],
      extra: 'Proyectos pensados para mejorar la movilidad y la calidad de vida de las comunidades.'
    },
    {
      Icono: FaClipboardCheck,
      color: '#8e3b8e',
      titulo: 'Interventoría y Control de Proyectos',
      subtitulo: 'Vigilar también es construir confianza.',
      parrafos: [
        'Realizamos seguimiento técnico y control integral de proyectos para contribuir al cumplimiento de las condiciones técnicas, contractuales, administrativas y de calidad.',
        'Evaluamos avances, verificamos procesos, identificamos riesgos y generamos información para una adecuada toma de decisiones.',
        'Control, transparencia y calidad en cada etapa.'
      ],
      extra: 'Un respaldo técnico que da tranquilidad y seguridad durante todo el desarrollo del proyecto.'
    },
    {
      Icono: FaCouch,
      color: '#b3435c',
      titulo: 'Diseño de Interiores',
      subtitulo: 'Espacios que cuentan historias.',
      parrafos: [
        'Transformamos interiores en ambientes que combinan identidad, funcionalidad, confort y estética.',
        'Creamos propuestas pensadas para las personas que habitarán cada espacio, cuidando distribución, materiales, iluminación, mobiliario y detalles.',
        'Diseñamos ambientes que se sienten tan bien como se ven.'
      ],
      extra: 'Cada ambiente refleja la personalidad de quien lo habita, sin perder funcionalidad ni confort.'
    },
    {
      Icono: FaTools,
      color: '#3a8f7c',
      titulo: 'Remodelación y Transformación',
      subtitulo: 'Lo existente también puede convertirse en algo extraordinario.',
      parrafos: [
        'Renovamos, adecuamos y transformamos espacios residenciales, comerciales e institucionales.',
        'Analizamos cada espacio para encontrar nuevas posibilidades, optimizar su funcionalidad y darle una nueva identidad.',
        'Renovar no es empezar de cero. Es descubrir todo lo que un espacio todavía puede llegar a ser.'
      ],
      extra: 'Una segunda oportunidad para espacios que ya tienes, con resultados que parecen obra nueva.'
    },
    {
      Icono: FaChalkboardTeacher,
      color: '#5a5a8e',
      titulo: 'Consultoría y Asesoría Especializada',
      subtitulo: 'Decisiones inteligentes para proyectos exitosos.',
      parrafos: [
        'Brindamos acompañamiento técnico y estratégico en proyectos de arquitectura, ingeniería y construcción.',
        'Apoyamos procesos de planificación, evaluación, estructuración, seguimiento y gestión, aportando conocimiento especializado para reducir riesgos y mejorar la toma de decisiones.',
        'Experiencia que orienta. Estrategia que genera resultados.'
      ],
      extra: 'Un aliado técnico para quienes necesitan claridad y respaldo antes de tomar decisiones importantes.'
    }
  ];

  return (
    <div className="container" style={{ padding: '40px 20px' }}>
      <h1 style={{ color: '#1e7a34', textAlign: 'center' }}>Nuestros Servicios</h1>
      <p style={{ textAlign: 'center', maxWidth: '750px', margin: '10px auto 10px', fontWeight: '600' }}>
        Diseñamos espacios. Construimos futuro. Transformamos territorios.
      </p>
      <p style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 15px' }}>
        En NATIVA ARQ entendemos que cada proyecto nace de una idea, una necesidad y un propósito.
        Por eso integramos arquitectura, ingeniería, construcción y gestión de proyectos para
        convertir ideas en espacios funcionales, sostenibles y con identidad.
      </p>
      <p style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 50px' }}>
        Acompañamos cada proyecto de principio a fin: imaginamos, diseñamos, planificamos,
        construimos y entregamos, cuidando cada detalle y buscando que cada obra genere
        verdadero valor para las personas y el territorio.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '25px',
          maxWidth: '1100px',
          margin: '0 auto'
        }}
      >
        {servicios.map((s, i) => {
          const Icono = s.Icono;
          return (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Espacio reservado para foto */}
              <div
                style={{
                  height: '160px',
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#999',
                  fontSize: '14px'
                }}
              >
                📷 Foto próximamente
              </div>

              <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                  <div
                    style={{
                      background: s.color,
                      color: '#fff',
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    <Icono size={22} />
                  </div>
                  <h3 style={{ margin: 0, color: s.color }}>{s.titulo}</h3>
                </div>

                <p style={{ fontStyle: 'italic', fontWeight: '600', marginBottom: '10px' }}>
                  {s.subtitulo}
                </p>

                {s.parrafos.map((p, idx) => (
                  <p key={idx} style={{ fontSize: '14px', marginBottom: '8px', color: '#444' }}>
                    {p}
                  </p>
                ))}

                <p
                  style={{
                    fontSize: '13px',
                    marginTop: 'auto',
                    paddingTop: '10px',
                    borderTop: `1px solid ${s.color}33`,
                    color: s.color,
                    fontWeight: '600'
                  }}
                >
                  {s.extra}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div
        style={{
          maxWidth: '750px',
          margin: '60px auto 0',
          textAlign: 'center',
          background: '#eaf5ec',
          borderRadius: '12px',
          padding: '35px 25px'
        }}
      >
        <h2 style={{ color: '#1e7a34' }}>Más que servicios, construimos valor</h2>
        <p style={{ marginTop: '15px' }}>
          En NATIVA ARQ creemos que cada proyecto debe responder a una pregunta fundamental:
        </p>
        <p style={{ fontWeight: '600', fontStyle: 'italic', margin: '10px 0' }}>
          ¿Qué podemos transformar para hacerlo mejor?
        </p>
        <p style={{ marginTop: '10px' }}>
          Por eso combinamos diseño, tecnología, conocimiento, innovación y comprensión del
          territorio para desarrollar soluciones que trasciendan la obra y generen valor para
          nuestros clientes y comunidades.
        </p>
        <p style={{ marginTop: '20px', fontWeight: '600', lineHeight: '1.8' }}>
          Arquitectura con identidad.<br />
          Construcción con propósito.<br />
          Innovación con sentido.<br />
          Territorio con futuro.
        </p>
        <h3 style={{ color: '#1e7a34', marginTop: '25px' }}>NATIVA ARQ</h3>
        <p style={{ fontStyle: 'italic' }}>Diseñamos el presente. Construimos lo que viene.</p>
      </div>
      <BotonArriba />
    </div>
  );
}

export default Servicios;