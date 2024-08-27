import React from 'react'

// Quiero recibir los siguientes tipos de datos:
/*
    Nombre: String
    Especie: String
    Edad: Number
    Está esterilizado: Boolean
    Apodos: Arreglo de Strings
*/

interface MascotaInfoComponentProps{
    nombre: string;
    especie: string;
    edad: number;
    estaEsterilizado: boolean;
    sobrenombres?: string[];
}

const MascotaInfoComponent = (props: MascotaInfoComponentProps) => {
  return (
    <>
      <p>Nombre de la mascota: {props.nombre}</p>
      <p>Especie: {props.especie}</p>
      <p>Edad: {props.edad}</p>
      <p>Sí está esterilizado</p>
      <p>Apodos</p>
      <ul>
        <li>Güero</li>
        <li>El Gordo</li>
        <li>Mandarino</li>
      </ul>
    </>
  )
}

export default MascotaInfoComponent
