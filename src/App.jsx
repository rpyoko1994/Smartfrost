import { useState } from 'react'
import Login  from '../component/Login/Login'
import Presentacion from '../component/Presentacion/Presentacion'
import Carrusel from '../component/Carrusel/Carrusel'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Carrusel/>
    </>
  )
}

export default App
