import { useState } from 'react'

function Proyectos({ proyectos }) {
  const [likes, setLikes] = useState({})

  const darLike = (nombre) =>
    setLikes((actual) => ({ ...actual, [nombre]: (actual[nombre] || 0) + 1 }))

  return (
    <section id="proyectos">
      <h2>Proyectos</h2>
      <ul className="lista-proyectos">
        {proyectos.map((nombre) => (
          <li key={nombre}>
            <span>{nombre}</span>
            <button type="button" onClick={() => darLike(nombre)}>
              👍 {likes[nombre] || 0}
            </button>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Proyectos
