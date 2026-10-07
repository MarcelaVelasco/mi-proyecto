function Contacto({ correo }) {
  return (
    <section id="contacto">
      <h2>Contacto</h2>
      <p>
        Correo: <a href={`mailto:${correo}`}>{correo}</a>
      </p>
    </section>
  )
}

export default Contacto
