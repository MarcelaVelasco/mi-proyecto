import Header from './components/Header'
import SobreMi from './components/SobreMi'
import Formacion from './components/Formacion'
import Habilidades from './components/Habilidades'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'
import Footer from './components/Footer'

const enlaces = [
  { href: '#sobre-mi', texto: 'Perfil' },
  { href: '#formacion', texto: 'Formación' },
  { href: '#habilidades', texto: 'Habilidades' },
  { href: '#proyectos', texto: 'Proyectos' },
  { href: '#contacto', texto: 'Contacto' },
]

// EDITAR: corrige descripciones y tecnologías para que reflejen cada proyecto real
const proyectos = [
  {
    nombre: 'Página web de mi portafolio',
    descripcion:
      'Sitio personal construido con componentes React, publicado en GitHub Pages.',
    tecnologias: ['React', 'Vite', 'Bootstrap'],
  },
  {
    nombre: 'Lista de tareas',
    descripcion: 'Aplicación para organizar pendientes con estado en React.',
    tecnologias: ['React', 'JavaScript'],
  },
  {
    nombre: 'Calculadora básica',
    descripcion: 'Calculadora con las cuatro operaciones aritméticas.',
    tecnologias: ['JavaScript', 'HTML', 'CSS'],
  },
]

function App() {
  return (
    <>
      <Header nombre="Katherine Umaña" enlaces={enlaces} />
      <main>
        <SobreMi />
        <Formacion />
        <Habilidades />
        <Proyectos proyectos={proyectos} />
        <Contacto correo="katherine.umana@catolica.edu.sv" />
      </main>
      <Footer />
    </>
  )
}

export default App