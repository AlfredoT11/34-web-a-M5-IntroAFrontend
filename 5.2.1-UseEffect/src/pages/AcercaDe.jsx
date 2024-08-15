import { NavLink } from "react-router-dom";

const AcercaDe = () => {
    return (
        <>
            <h1>Acerca de...</h1>
            <p>Esta aplicación fue desarrollada para la clase de Intro a FrontEnd</p>

            <NavLink to='/'>
                <h2>Regresar a página principal</h2>
            </NavLink>
        </>
    )
}

export default AcercaDe;