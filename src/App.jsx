import Navbar from './Components/Navbar/Navbar.jsx'
import './App.css'
import { Contenido } from './Components/Contenido/Contenido'
import { Astros } from './Components/Astros/Astros'

function App() {

  const linkData = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/' },
    { name: 'Contact', href: '/' }
  ]
  const URL = 'http://api.open-notify.org/astros.json'

  return (
    <>
      <Navbar links={linkData} />
      <Contenido source = {URL}/>
      <Astros/>
    </>
  )
}

export default App
