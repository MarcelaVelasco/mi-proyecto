import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const enlaces = [
  { href: '#sobre-mi', texto: 'Sobre mí' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#contacto', texto: 'Contacto' },
]

const proyectos = [
  'Página web de mi portafolio',
  'Lista de tareas',
  'Calculadora básica',
]

function App() {
  return (
    <>
      <Header nombre="Katherine Umaña" enlaces={enlaces} />
      <main>
        <SobreMi />
        <Proyectos proyectos={proyectos} />
        <Contacto correo="katherine.umana@catolica.edu.sv" />
      </main>
      <Footer />
    </>
  )
}

export default App
