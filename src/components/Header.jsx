function Header({ nombre, enlaces }) {
  return (
    <header>
      <nav className="bg-dark sticky-top py-2 text-center">
        {enlaces.map((enlace) => (
          <a
            key={enlace.href}
            href={enlace.href}
            className="text-white text-decoration-none mx-3"
          >
            {enlace.texto}
          </a>
        ))}
      </nav>

      <div className="bg-primary bg-gradient text-white text-center py-5">
        <div className="container py-4">
          <h1 className="display-4 fw-bold">{nombre}</h1>
          <p className="lead mb-4">Portafolio de desarrollo web</p>
          <a href="#proyectos" className="btn btn-light btn-lg me-2">
            Ver proyectos
          </a>
          <a href="#contacto" className="btn btn-outline-light btn-lg">
            Contáctame
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header