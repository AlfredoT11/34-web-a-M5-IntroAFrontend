const ListaTareasComponent = () => {

    function agregarElementoALista(){
        alert('Agregando elemento');
    }

    return (
        <>
            <label>Nueva tarea: </label><input />
            <button onClick={agregarElementoALista}>Agregar tarea</button>
            <ul>
                <li>Lavar ropa</li>
                <li>Limpiar cajas de arena de los gatos</li>
            </ul>
        </>
    )
}

export default ListaTareasComponent;