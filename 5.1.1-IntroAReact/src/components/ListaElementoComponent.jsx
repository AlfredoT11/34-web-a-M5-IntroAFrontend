const ListaElementoComponent = ({ tarea }) => {
    return (
        <>
            <li>
                {tarea}<button>Completar tarea</button>
            </li>
        </>
    )
}

export default ListaElementoComponent;