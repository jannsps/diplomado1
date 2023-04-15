import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parrafo from './components/parrafo/Parrafo'
import Variables from './components/variables/Variables'
import Estados from './components/estados/Estados'
import Contador from './components/contador/Contador'
import Listas from './components/listas/Listas'
import Formulario from './components/formulario/Formulario'

function App() {
  

  return (
    <div className="App">
      <Formulario/>
      <hr />
      <Parrafo/>
      <hr />
      <Variables/>
      <hr />
      <Estados/>
      <hr />
      <Contador/>
      <hr />
      <Listas/>
      </div>
  )
}

export default App
