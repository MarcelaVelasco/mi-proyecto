const anio = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p className="mb-0">&copy; {anio} Mi Portafolio</p>
    </footer>
  )
}

export default Footer