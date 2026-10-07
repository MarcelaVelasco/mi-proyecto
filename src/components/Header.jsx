function Header({ nombre, enlaces }) {
  const iniciales = nombre
    .split(' ')
    .map((palabra) => palabra[0])
    .slice(0, 2)
    .join('')

  return (
    <header>
      <nav className="nav-oscuro sticky-top py-3 text-center">
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href}>
            {enlace.texto}
          </a>
        ))}
      </nav>

      <div className="hero py-5">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-8">
              <p className="sobretitulo mb-2">Portafolio profesional</p>
              <h1 className="display-3 mb-3">{nombre}</h1>
              <p className="lead mb-4 text-white-50">
                Estudiante de Ingeniería en Sistemas Informáticos enfocada en el
                desarrollo web.
              </p>
              <a href="#proyectos" className="btn btn-light px-4 me-2">
                Ver proyectos
              </a>
              <a href="#contacto" className="btn btn-outline-light px-4">
                Contacto
              </a>
            </div>
            <div className="col-md-4 text-center mt-5 mt-md-0">
              <span className="avatar">{iniciales}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header