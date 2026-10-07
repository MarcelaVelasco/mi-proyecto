import { useState } from 'react'

function Proyectos({ proyectos }) {
  const [likes, setLikes] = useState({})

  const darLike = (nombre) =>
    setLikes((actual) => ({ ...actual, [nombre]: (actual[nombre] || 0) + 1 }))

  return (
    <section id="proyectos" className="py-5 fondo-suave">
      <div className="container py-3">
        <h2 className="titulo-seccion">Proyectos destacados</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {proyectos.map((proyecto, indice) => (
            <div className="col" key={proyecto.nombre}>
              <div className="card h-100 tarjeta-proyecto">
                <div className="card-body p-4">
                  <p className="numero-proyecto mb-2">
                    PROYECTO {String(indice + 1).padStart(2, '0')}
                  </p>
                  <h3 className="h5 mb-3">{proyecto.nombre}</h3>
                  <p className="text-muted">{proyecto.descripcion}</p>
                  {proyecto.tecnologias.map((tec) => (
                    <span key={tec} className="badge etiqueta">
                      {tec}
                    </span>
                  ))}
                </div>
                <div className="card-footer bg-white border-0 px-4 pb-4">
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => darLike(proyecto.nombre)}
                  >
                    👍 Me gusta · {likes[proyecto.nombre] || 0}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proyectos