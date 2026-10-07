function Contacto({ correo }) {
  return (
    <section id="contacto" className="container py-5">
      <h2 className="mb-4 border-bottom pb-2">Contacto</h2>
      <div className="card shadow-sm text-center">
        <div className="card-body py-5">
          <p className="fs-5 mb-4">¿Quieres trabajar conmigo? Escríbeme.</p>
          <a href={`mailto:${correo}`} className="btn btn-primary btn-lg">
            {correo}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contacto