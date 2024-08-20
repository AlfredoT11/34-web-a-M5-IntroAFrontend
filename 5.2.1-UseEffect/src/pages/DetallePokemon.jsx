import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

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
            <table className="table table-hover">
                <thead>
                    <th>Estadística</th>
                    <th>Valor</th>
                </thead>
                <tbody>
                    {
                        detallePokemon?.stats.map((stat, index) => {
                            return (
                                <tr key={index}>
                                    <td>{stat.stat.name}</td>
                                    <td>{stat.base_stat}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>

            <NavLink to='/'>
                <h4>Regresar a página principal</h4>
            </NavLink>
        </>
    )
}

export default DetallePokemon;
