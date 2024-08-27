import React, { ReactElement } from 'react'

// Quiero recibir los siguientes tipos de datos:
/*
    Nombre: String
    Especie: String
    Edad: Number
    Está esterilizado: Boolean
    Apodos: Arreglo de Strings
*/

interface MascotaInfoComponentProps {
    nombre: string;
    especie: string;
    edad: number;
    estaEsterilizado: boolean;
    sobrenombres?: string[];
    humanos: string | string[]
}

// const MascotaInfoComponent = (props: MascotaInfoComponentProps) => {
const MascotaInfoComponent = ({ nombre, especie, edad, estaEsterilizado, sobrenombres, humanos }: MascotaInfoComponentProps) => {

    function obtenerMensajeEsterilizacion(): string {

        if (estaEsterilizado) {
            return `El ${especie} Sí está esterilizado`;
        }

        return `El ${especie} NO está esterilizado`;
    }

    function obtenerSobrenombres(): ReactElement {
        if (sobrenombres == undefined) {
            return <p>{`El ${especie} NO tiene sobrenombres`}</p>;
        }

        return (
            <ul>
                {sobrenombres.map((sobrenombre: string) => <li>{sobrenombre}</li>)}
            </ul>
        )
    }

    function obtenerHumanos(): ReactElement {
        if (typeof humanos === "string") {
            return (
                <>
                    <p>Humano de la mascota: {humanos}</p>
                </>
            )
        }

        return (
            <>
                <p>Humanos de la mascota: </p>
                <ul>
                    {humanos.map((nombreHumano: string) => <li>{nombreHumano}</li>)}
                </ul>
            </>
        )
    }

    return (
        <>
            <p>Nombre de la mascota: {nombre}</p>
            <p>Especie: {especie}</p>
            <p>Edad: {edad}</p>
            <p>{obtenerMensajeEsterilizacion()}</p>
            <p>Sobrenombres: </p>
            {obtenerSobrenombres()}
            {obtenerHumanos()}
            <hr></hr>
        </>
    )
}

export default MascotaInfoComponent
