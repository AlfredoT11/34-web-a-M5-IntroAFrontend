const ListaElementoComponent = ({ tarea, completarTareaFunction }) => {

    return (
        <>
            <li>
                {tarea}<button onClick={completarTareaFunction}>Completar tarea</button>
            </li>
        </>
    )
}

export default ListaElementoComponent;