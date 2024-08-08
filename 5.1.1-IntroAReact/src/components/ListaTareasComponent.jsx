import { useState } from "react";
import ListaElementoComponent from "./ListaElementoComponent";

const ListaTareasComponent = () => {

    // Pasos para trabajar con variables de estado
    // 1. Utilizar la función useState() para crear la variable de estado y la función
    // que permite modificarla.
    // 2. Recordar que la función useState() se debe importar.
    // 3. El párametro de useState es el valor inicial de la variable de estado.
    const [tareas, setTareas] = useState(['Lavar ropa', 'Bañar al perro', 'Preparar mi clase']);
    const [nuevaTareaTexto, setNuevaTareaTexto] = useState('');

    function agregarElementoALista(){
        // 1. Leer el valor del input
        console.log(nuevaTareaTexto);
        // 2. Agregar ese valor a la variable de estado tareas.
        // [...tareas, nuevaTareaTexto] = Una copia del arreglo tareas + nuevaTareaTexto
        setTareas([...tareas, nuevaTareaTexto]);
        setNuevaTareaTexto('');
    }

    return (
        <>
            <label>Nueva tarea: </label><input value={nuevaTareaTexto} placeholder='Nueva tarea' onChange={(event) => {setNuevaTareaTexto(event.target.value)}} />
            <button onClick={agregarElementoALista}>Agregar tarea</button>
            <ul>
                {
                    // Nosotros podemos acceder directamente a las variables de estado 
                    // si solamente queremos leerlas.
                    /*
                        ['a', 'b', 'c'] => map() => [<li>a</li>, <li>b</li>, <li>c</li>]
                    */
                    tareas.map((tarea, index )=> {
                        return <ListaElementoComponent tarea={tarea} key={index} />
                    })
                }
            </ul>
        </>
    )
}

export default ListaTareasComponent;