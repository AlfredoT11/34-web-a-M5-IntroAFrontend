import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TituloComponent from './components/TituloComponent'
import Section from './components/Section'
import ContadorDeClicksComponent from './components/ContadorDeClicksComponent'
import ListaTareasComponent from './components/ListaTareasComponent'

function App() {

  return (
    <>
      <h1>¡Hola mundo!</h1>
      <TituloComponent mensaje='Hola' ></TituloComponent>
      <TituloComponent mensaje='mundo' tamanio={2}></TituloComponent>
      <TituloComponent mensaje='desde' tamanio={3}></TituloComponent>
      <TituloComponent mensaje='React' tamanio={4}></TituloComponent>

      <Section tituloMensaje="Contador">

        <ListaTareasComponent />
        <ListaTareasComponent />
      </Section>

      <ContadorDeClicksComponent />
    </>
  )
}

export default App
