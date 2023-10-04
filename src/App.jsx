
import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import { Contenido } from './Components/Contenido/Contenido'
import { Astros } from './Components/Astros/Astros'
import { Route, Routes } from 'react-router-dom'
import { About } from './Components/About/About.jsx'

function App() {

  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Astros', href: '/astros' }
  ]

  return (
    <>
      <Navbar links={linkData} title="Navbar" />
      <Routes>
        <Route
          element={<Contenido />}
          path='/'
        />

        <Route
          element={<About />}
          path='/about'
        />

        <Route
          element={<Astros />}
          path='/astros'
        />
      </Routes>
    </>
  )
}

export default App
