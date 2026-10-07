function Contacto({ correo }) {
  return (
    <section id="contacto" className="bloque-contacto py-5 text-center">
      <div className="container py-4">
        <h2 className="mb-3">Contacto</h2>
        <p className="lead text-white-50 mb-4">
          ¿Tienes una propuesta o quieres colaborar? Escríbeme.
        </p>
        <a href={`mailto:${correo}`} className="btn btn-light btn-lg px-5">
          {correo}
        </a>
      </div>
    </section>
  )
}

export default Contacto