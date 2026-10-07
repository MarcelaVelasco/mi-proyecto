const anio = new Date().getFullYear()

function Footer() {
  return (
    <footer className="pie text-center py-4">
      <p className="mb-0 small">
        &copy; {anio} Katherine Umaña · Hecho con React y Bootstrap
      </p>
    </footer>
  )
}

export default Footer