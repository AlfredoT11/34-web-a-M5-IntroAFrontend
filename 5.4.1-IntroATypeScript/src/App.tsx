import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MascotaInfoComponent from './components/MascotaInfoComponent'

function App() {

  return (
    <>
      <MascotaInfoComponent
        nombre="Bowie"
        especie="Gato"
        edad={1}
        estaEsterilizado={true}
        sobrenombres={['Boggie', 'Churrumino']}
        humanos={['Tona', 'Mali']}
      />

      <MascotaInfoComponent
        nombre="Loki"
        especie="Perro"
        edad={5}
        estaEsterilizado={true}
        humanos={'Poncho'}
      />
    </>
  )
}

export default App
