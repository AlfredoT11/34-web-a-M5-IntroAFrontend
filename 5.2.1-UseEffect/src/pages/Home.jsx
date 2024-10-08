import { useEffect, useState } from "react";
import TitleH4Component, { TitleH1Component } from "../components/TitulosComponents";
import { NavLink } from "react-router-dom";

const Home = () => {
    const [listaPokemones, setListaPokemones] = useState([]);
    const [pokemonesBuscados, setPokemonesBuscados] = useState('');

    const [estaCargando, setEstaCargando] = useState(true);

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
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=2000');
                const json = await response.json();
                console.log(json);
                setListaPokemones(json.results);
                setEstaCargando(false);
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
            {/* Conditional rendering: A través de una condición vamos a definir qué es lo que se ve en pantalla */}
            {estaCargando ? (<div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div>
            </div>) :
                <div className="container">
                    <div className="row">
                        {
                            pokemonesFiltrados.map((pokemon, index) => {
                                return (
                                    /*
                                    "https://pokeapi.co/api/v2/pokemon/1/"
                                    separador = /
                                    [
                                    "https:"
                                    ""
                                    "pokeapi.co"
                                    "api"
                                    "v2"
                                    "pokemon"
                                    "1"
                                    ]
                                    */

                                    <div key={index} className="col-3 p-3">
                                        <div className="card sombra rounded-3xl" style={{ width: "18rem" }}>
                                            <NavLink to={`/pokemonDetail/${pokemon.url.split('/')[6]}`}>
                                                <img
                                                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/')[6]}.png`}
                                                    className="card-img-top"
                                                    alt="..."
                                                />
                                            </NavLink>
                                            <div className="card-body">
                                                <NavLink to={`/pokemonDetail/${pokemon.url.split('/')[6]}`}>
                                                    <h5 className="card-title">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h5>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            }


            <NavLink to='/about'>
                <p>Acerca de</p>
            </NavLink>
        </>
    )
}

export default Home;