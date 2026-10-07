import { useState } from 'react'

function Proyectos({ proyectos }) {
  const [likes, setLikes] = useState({})

  const darLike = (nombre) =>
    setLikes((actual) => ({ ...actual, [nombre]: (actual[nombre] || 0) + 1 }))

  return (
    <section id="proyectos" className="container py-5">
      <h2 className="mb-4 border-bottom pb-2">Proyectos</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {proyectos.map((nombre) => (
          <div className="col" key={nombre}>
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h3 className="card-title h5">{nombre}</h3>
                <p className="card-text text-muted">
                  Proyecto del portafolio desarrollado con tecnologías web.
                </p>
              </div>
              <div className="card-footer bg-white border-0 pb-3">
                <button
                  type="button"
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => darLike(nombre)}
                >
                  👍 Me gusta{' '}
                  <span className="badge text-bg-primary">
                    {likes[nombre] || 0}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Proyectos