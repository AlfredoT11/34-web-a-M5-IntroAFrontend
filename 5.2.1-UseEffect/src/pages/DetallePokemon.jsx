import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetallePokemon = () => {

    const [detallePokemon, setDetallePokemon] = useState(null);

    const { id } = useParams();
    useEffect(() => {
        const consultarDetalles = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
                const json = await response.json();
                console.log(json);
                setDetallePokemon(json);
            } catch (e) {
                console.log(e);
            }
        }

        consultarDetalles();
    }, []);

    return (
        <>
            <h1>Detalles del Pokémon</h1>
            <h2>{detallePokemon?.name.charAt(0).toUpperCase() + detallePokemon?.name.slice(1)}</h2>
            <ul>
            {
                detallePokemon?.stats.map((stat, index) => {
                    return (<li key={index}>{stat.stat.name} : {stat.base_stat}</li>)
                })
            }
            </ul>
        </>
    )
}

export default DetallePokemon;
