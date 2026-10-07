function Header({ nombre, enlaces }) {
  return (
    <header className="header">
      <h1>{nombre}</h1>
      <nav>
        {enlaces.map((enlace) => (
          <a key={enlace.href} href={enlace.href}>
            {enlace.texto}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default Header
