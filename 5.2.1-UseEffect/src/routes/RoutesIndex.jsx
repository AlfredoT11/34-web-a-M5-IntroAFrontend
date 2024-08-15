import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import DetallePokemon from '../pages/DetallePokemon'
import { useEffect, useState } from 'react';
import Template from '../pages/Template';

// El primer paso para trabajar con rutas con react-router-dom es crear un índice de rutas.
// Esto se hace con elemento Routes importado de react-router-dom y este elemento tiene hijos de elementos Route.
// Cada elemento Route tiene el componente a cargar y la ruta (o URL) asociada a esa pantalla.
const RoutesIndex = () => {

    const [apiRoutes, setApiRoutes] = useState([]);

    useEffect(() => {
        const response = ['/ability', '/generation'];
        setApiRoutes(response);
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Home />} /> {/* Esta línea nos dice que se carge la page Home cuando estemos en la ruta / */}
            <Route path='/about' element={<AcercaDe />}/> {/* Esta línea nos dice que se carge la page AcercaDe cuando estemos en la ruta /about */}
            <Route path='/pokemonDetail/:id' element={<DetallePokemon />} />
            {
                apiRoutes.map((route, index) => {
                    return <Route key={index} path={route} element={<Template route={route} />}></Route>
                })
            }
        </Routes>
    )
}

export default RoutesIndex;