import BotonArriba from '../components/BotonArriba';
import local1 from '../img/local/1.png';
import local2 from '../img/local/2.jpeg';
import local3 from '../img/local/3.jpeg';
import local4 from '../img/local/4.jpeg';
import local5 from '../img/local/5.jpeg';
import local6 from '../img/local/6.jpeg';
import local7 from '../img/local/7.jpeg';
import local8 from '../img/local/8.jpeg';
import local9 from '../img/local/9.jpeg';

import p1foto1 from '../img/proyecto1/1.jpeg';
import p1foto2 from '../img/proyecto1/2.jpeg';
import p1foto3 from '../img/proyecto1/3.jpeg';
import p1foto4 from '../img/proyecto1/4.jpeg';
import p1foto5 from '../img/proyecto1/5.jpeg';
import p1foto6 from '../img/proyecto1/6.jpeg';
import p1foto7 from '../img/proyecto1/7.jpeg';
import p1foto8 from '../img/proyecto1/8.jpeg';
import p1foto9 from '../img/proyecto1/9.jpeg';
import p1video1 from '../img/proyecto1/video1.mp4';

import p2video1 from '../img/proyecto2/video1.mp4';
import p2video2 from '../img/proyecto2/video2.mp4';

function Nosotros() {
  const fotosLocal = [local1, local2, local3, local4, local5, local6, local7, local8];
  const fotosProyecto1 = [p1foto1, p1foto2, p1foto3, p1foto4, p1foto5, p1foto6, p1foto7, p1foto8, p1foto9];

  const valores = [
    { titulo: 'Funcionalidad', texto: 'Espacios pensados para las necesidades reales de sus usuarios.' },
    { titulo: 'Adaptacion', texto: 'Soluciones acordes a las condiciones del territorio amazonico.' },
    { titulo: 'Identidad', texto: 'Arquitectura que reconoce la cultura y el lugar.' },
    { titulo: 'Innovacion', texto: 'Nuevas ideas para responder a desafios reales.' },
    { titulo: 'Sostenibilidad', texto: 'Uso responsable de recursos y del entorno.' },
    { titulo: 'Calidad', texto: 'Compromiso con la estetica, la durabilidad y la responsabilidad.' }
  ];

  const pasos = [
    { numero: '01', titulo: 'Observar', texto: 'Comprender el lugar y sus condiciones.' },
    { numero: '02', titulo: 'Interpretar', texto: 'Traducir el territorio en criterios de diseno.' },
    { numero: '03', titulo: 'Innovar', texto: 'Explorar soluciones contemporaneas y pertinentes.' },
    { numero: '04', titulo: 'Disenar', texto: 'Crear espacios funcionales y coherentes.' },
    { numero: '05', titulo: 'Construir', texto: 'Materializar con responsabilidad y calidad.' },
    { numero: '06', titulo: 'Transformar', texto: 'Generar valor para personas y territorio.' }
  ];

  const pilares = [
    { titulo: 'Territorio', texto: 'Entendemos el lugar antes de intervenirlo.' },
    { titulo: 'Identidad', texto: 'Reconocemos la cultura y los conocimientos locales.' },
    { titulo: 'Innovacion', texto: 'Buscamos nuevas respuestas para los desafios de la Amazonia.' },
    { titulo: 'Sostenibilidad', texto: 'Disenamos pensando en el presente y en el futuro.' },
    { titulo: 'Confianza', texto: 'Trabajamos con responsabilidad, transparencia y calidad.' }
  ];

  const tituloSeccion = { color: '#b8860b', fontWeight: 'bold', fontSize: '0.9rem' };
  const tarjeta = { padding: '20px', border: '1px solid #e8e1d6', borderRadius: '10px', backgroundColor: '#fff' };

  return (
    <main className="container">
      <header style={{ marginBottom: '40px' }}>
        <h1>Nativa Arquitectura y Construccion S.A.S.</h1>
        <p style={{ color: '#b8860b', fontStyle: 'italic', fontSize: '1.2rem', marginTop: '10px' }}>
          Arquitectura con identidad, construyendo futuro.
        </p>
        <p style={{ color: '#666', marginTop: '8px' }}>
          Disenamos desde el territorio. Innovamos para la Amazonia.
        </p>
      </header>

      <section style={{ padding: '25px', backgroundColor: '#faf6ee', borderLeft: '5px solid #b8860b', borderRadius: '10px' }}>
        <p style={tituloSeccion}>CONCEPTO DE MARCA</p>
        <h2>NATIVA: una nueva manera de construir desde el Vaupes</h2>
        <p style={{ marginTop: '12px' }}>
          Nativa Arquitectura y Construccion S.A.S. es una empresa local de Mitu, Vaupes, que nace en 2014 con el proposito de aportar al desarrollo arquitectonico y constructivo de la region amazonica.
        </p>
        <p style={{ marginTop: '15px', color: '#b8860b', fontStyle: 'italic', fontWeight: 'bold' }}>
          No se trata solamente de construir en el Vaupes. Se trata de construir desde el Vaupes.
        </p>
      </section>

      <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>01</p>
        <h2>Quienes somos</h2>
        <p style={{ marginTop: '10px' }}>
          Nativa integra la arquitectura contemporanea con la identidad cultural, las condiciones climaticas, los materiales y las particularidades del territorio amazonico, creando espacios que respondan a las necesidades reales de las personas.
        </p>
      </section>

      <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>02</p>
        <h2>Nuestro proposito</h2>
        <p style={{ color: '#b8860b', fontWeight: 'bold', marginTop: '10px' }}>Crear arquitectura que pertenezca al territorio.</p>
        <p style={{ marginTop: '10px' }}>
          Conectamos conocimiento tecnico, identidad amazonica, innovacion y sostenibilidad en cada proyecto.
        </p>
      </section>

      <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>03</p>
        <h2>El territorio es nuestro punto de partida</h2>
        <p style={{ marginTop: '10px' }}>
          Concebimos el proyecto como un dialogo entre arquitectura, territorio y comunidad.
        </p>
        <div style={{ marginTop: '20px', padding: '18px', backgroundColor: '#252525', color: '#fff', borderRadius: '10px', textAlign: 'center', fontWeight: 'bold' }}>
          TERRITORIO + IDENTIDAD + TECNOLOGIA + SOSTENIBILIDAD = ARQUITECTURA NATIVA
        </div>
      </section>
            <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>04</p>
        <h2>Nuestra propuesta de valor</h2>
        <p style={{ marginTop: '10px' }}>
          No buscamos simplemente construir espacios. Buscamos disenar respuestas para el territorio.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px', marginTop: '20px' }}>
          {valores.map((valor) => (
            <article key={valor.titulo} style={tarjeta}>
              <h3 style={{ color: '#b8860b', marginBottom: '8px' }}>{valor.titulo}</h3>
              <p>{valor.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>05</p>
        <h2>Nuestra metodologia: Arquitectura Nativa</h2>
        <p style={{ marginTop: '10px' }}>
          Disenar con el territorio. Construir con identidad. Innovar para el futuro.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginTop: '20px' }}>
          {pasos.map((paso) => (
            <article key={paso.numero} style={tarjeta}>
              <span style={{ color: '#b8860b', fontWeight: 'bold' }}>{paso.numero}</span>
              <h3 style={{ margin: '8px 0' }}>{paso.titulo}</h3>
              <p>{paso.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '45px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <article style={tarjeta}>
            <h2 style={{ color: '#b8860b' }}>Mision</h2>
            <p style={{ marginTop: '10px' }}>
              Disenamos y desarrollamos soluciones arquitectonicas y constructivas que responden a las particularidades del territorio amazonico, integrando conocimiento tecnico, innovacion, identidad cultural y sostenibilidad, contribuyendo al desarrollo responsable del Vaupes.
            </p>
          </article>
          <article style={tarjeta}>
            <h2 style={{ color: '#b8860b' }}>Vision</h2>
            <p style={{ marginTop: '10px' }}>
              Ser una empresa referente de la Amazonia colombiana en el desarrollo de soluciones arquitectonicas y constructivas innovadoras, sostenibles y adaptadas al territorio, integrando tecnologia, identidad cultural y respeto por la naturaleza.
            </p>
          </article>
        </div>
      </section>

      <section style={{ marginTop: '45px' }}>
        <p style={tituloSeccion}>06</p>
        <h2>Nuestros pilares</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))', gap: '18px', marginTop: '20px' }}>
          {pilares.map((pilar) => (
            <article key={pilar.titulo} style={{ ...tarjeta, borderTop: '4px solid #b8860b' }}>
              <h3 style={{ color: '#b8860b', marginBottom: '8px' }}>{pilar.titulo}</h3>
              <p>{pilar.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '50px' }}>
        <h2>Nuestro espacio</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '15px' }}>
          {fotosLocal.map((foto, i) => (
            <img key={i} src={foto} alt={`Local ${i + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '50px' }}>
        <h2>Proyecto: Museo Departamental del Vaupes</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px', marginTop: '15px' }}>
          {fotosProyecto1.map((foto, i) => (
            <img key={i} src={foto} alt={`Museo ${i + 1}`} style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '6px' }} />
          ))}
        </div>
        <video controls style={{ width: '100%', marginTop: '15px', borderRadius: '6px' }}>
          <source src={p1video1} type="video/mp4" />
        </video>
      </section>

      <section style={{ marginTop: '50px', marginBottom: '60px' }}>
        <h2>Proyecto: Malecon</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '15px', marginTop: '15px' }}>
          <video controls style={{ width: '100%', borderRadius: '6px' }}>
            <source src={p2video1} type="video/mp4" />
          </video>
          <video controls style={{ width: '100%', borderRadius: '6px' }}>
            <source src={p2video2} type="video/mp4" />
          </video>
        </div>
      </section>
      <BotonArriba />
    </main>
  );
}

export default Nosotros;