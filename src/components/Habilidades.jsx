const grupos = [
  { categoria: 'Desarrollo', items: ['HTML5', 'CSS3', 'JavaScript', 'React'] },
  { categoria: 'Herramientas', items: ['Git', 'GitHub', 'GitHub Pages', 'Vite', 'VS Code'] },
  { categoria: 'Diseño', items: ['Bootstrap 5', 'Diseño responsivo'] },
]

function Habilidades() {
  return (
    <section id="habilidades" className="py-5 bg-white">
      <div className="container py-3">
        <h2 className="titulo-seccion">Habilidades técnicas</h2>
        <div className="row g-4">
          {grupos.map((grupo) => (
            <div className="col-md-4" key={grupo.categoria}>
              <h3 className="h6 text-uppercase text-muted mb-3">
                {grupo.categoria}
              </h3>
              {grupo.items.map((item) => (
                <span key={item} className="badge etiqueta fs-6">
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Habilidades