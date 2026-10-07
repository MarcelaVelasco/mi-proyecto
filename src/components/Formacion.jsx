// EDITAR: agrega los nombres de tus instituciones y los años si quieres
const hitos = [
  {
    titulo: 'Ingeniería en Sistemas Informáticos',
    lugar: 'Universidad Católica de El Salvador',
    estado: 'En curso · Tercer año',
  },
  {
    titulo: 'Bachillerato',
    lugar: 'Educación media',
    estado: 'Completado',
  },
  {
    titulo: 'Educación básica',
    lugar: 'Educación básica',
    estado: 'Completada',
  },
]

function Formacion() {
  return (
    <section id="formacion" className="py-5 fondo-suave">
      <div className="container py-3">
        <h2 className="titulo-seccion">Formación académica</h2>
        <div className="linea-tiempo">
          {hitos.map((hito) => (
            <div className="hito" key={hito.titulo}>
              <h3 className="h5 mb-1">{hito.titulo}</h3>
              <p className="mb-1 text-muted">{hito.lugar}</p>
              <span className="badge etiqueta">{hito.estado}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Formacion