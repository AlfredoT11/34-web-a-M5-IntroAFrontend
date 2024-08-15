import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home';
import AcercaDe from '../pages/AcercaDe';
import DetallePokemon from '../pages/DetallePokemon'

// El primer paso para trabajar con rutas con react-router-dom es crear un índice de rutas.
// Esto se hace con elemento Routes importado de react-router-dom y este elemento tiene hijos de elementos Route.
// Cada elemento Route tiene el componente a cargar y la ruta (o URL) asociada a esa pantalla.
const RoutesIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} /> {/* Esta línea nos dice que se carge la page Home cuando estemos en la ruta / */}
            <Route path='/about' element={<AcercaDe />}/> {/* Esta línea nos dice que se carge la page AcercaDe cuando estemos en la ruta /about */}
            <Route path='/pokemonDetail/:id' element={<DetallePokemon />} />
        </Routes>
    )
}

export default RoutesIndex;