/*
Resumen de destructuración

const persona = {
    nombre: 'Mali',
    edad: 25,
    gatos: ['Boggie', 'Tigrillo', 'Gruñiz', 'Zoro']
}

const nombre = persona.nombre;
const edad = persona.edad;
const gatos = persona.gatos;
// ==
const {nombre, edad, gatos} = persona;
*/

// 1. Crear la función para el componente.
// 2. Manejar los props.
// const TituloComponent = (props) => { <- Manejand los props con el objeto props
const TituloComponent = ({ mensaje, tamanio = 1 }) => { // <- Manejando los props con destructuración

    /* Renderizado condicional - Conditional rendering */
    if (tamanio == 1) {
        return (
            <>
                <h1>{mensaje}</h1>
                <hr></hr>
            </>
        )
    } else if (tamanio == 2) {
        return (
            <>
                <h2>{mensaje}</h2>
                <hr></hr>
            </>
        )
    } else if (tamanio == 3) {
        return (
            <>
                <h3>{mensaje}</h3>
                <hr></hr>
            </>
        )
    } else {
        return (
            <>
                <h4>{mensaje}</h4>
                <hr></hr>
            </>
        )
    }

}

export default TituloComponent;