import { useEffect, useState } from "react";
import TitleH4Component, { TitleH1Component } from "../components/TitulosComponents";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [listaPokemones, setListaPokemones] = useState([]);
    const [pokemonesBuscados, setPokemonesBuscados] = useState('');

    // El hook useEffect recibe 2 parámetros:
    /*
        1. La función a ejecutar.
            - Esta función se ejecuta en alguno de los siguientes casos:
                1. Cuando el componente se carga por primera vez.
                2. Cuando una dependencia sea modificada.
        2. La lista de dependencias.
        Una dependencia es cualquier valor que se encuentre dentro del componente (property, una variable de estado, una variable "normal");
    */
    useEffect(() => {
        const consultarPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
                const json = await response.json();
                console.log(json);
                setListaPokemones(json.results);
            } catch (e) {
                console.log(e);
            }
        }

        consultarPokemons();
    }, []); // Si el arreglo de depencias está vacío, la función a ejecutar SOLAMENTE se ejecuta cuando se carga el componente.
    // }); // Si no mandamos un arreglo de dependencias, la función a ejecutar se ejecuta CADA VEZ que el componente se renderize.
    // }, [a, b]); // Si el arreglo de depencias tiene valores, entonces la función a ejecutar se ejecutará CADA VEZ que el valor de alguna de las dependencias se modifique.

    function leerPokemonesBuscadosInput(event) {
        setPokemonesBuscados(event.target.value);
    }

    const pokemonesFiltrados = listaPokemones.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(pokemonesBuscados.toLowerCase());
    });


    return (
        <>
            <TitleH1Component titulo='Pokédex' />

            <TitleH4Component titulo='Buscador' />
            <form>
                <label>Buscar pokemon: </label>
                <input
                    type='text'
                    value={pokemonesBuscados}
                    onChange={leerPokemonesBuscadosInput}
                />
            </form>
            <ul>
                {
                    pokemonesFiltrados.map((pokemon, index) => {
                        return (
                            <NavLink key={index} to={`/pokemonDetail/${pokemon.name}`}>
                                <li>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li>
                            </NavLink>
                        );
                    })
                }
            </ul>

            <NavLink to='/about'>
                <p>Acerca de</p>
            </NavLink>
        </>
    )
}

export default Home;