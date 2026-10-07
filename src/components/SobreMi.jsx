function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5 bg-white">
      <div className="container py-3">
        <h2 className="titulo-seccion">Perfil</h2>
        <div className="row g-5">
          <div className="col-lg-7">
            <p className="fs-5">
              Estudiante de la Universidad Católica de El Salvador, apasionada
              por el desarrollo web.
            </p>
            <p className="text-muted">
              Construyo interfaces con React y las publico con control de
              versiones en Git y GitHub.
            </p>
          </div>
          <div className="col-lg-5">
            <dl className="mb-0">
              <dt className="text-muted small text-uppercase">Carrera</dt>
              <dd className="mb-3">Ingeniería en Sistemas Informáticos</dd>
              <dt className="text-muted small text-uppercase">Universidad</dt>
              <dd className="mb-3">Universidad Católica de El Salvador</dd>
              <dt className="text-muted small text-uppercase">Enfoque</dt>
              <dd className="mb-0">Desarrollo web frontend</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SobreMi