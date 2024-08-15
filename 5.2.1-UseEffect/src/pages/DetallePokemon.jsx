import { useParams } from "react-router-dom";

const DetallePokemon = () => {

    const { name } = useParams();

    return (
        <>
            <h1>Detalles del Pokémon</h1>
            <h2>{name}</h2>
        </>
    )
}

export default DetallePokemon;
