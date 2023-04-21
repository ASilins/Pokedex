import { useEffect, useState } from "react";
import "../css/Pokemon.css";
import PokemonDetailed from "./PokemonDetailed";

function Pokemon({ url }) {
    const [pokemon, setPokemon] = useState();
    const [hidden, sethidden] = useState("hidden");

    useEffect(() => {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setPokemon(data);
            });
    });

    return (
        pokemon == null ?
            <div className="pokemon">

            </div>
            :
            <>
                <div className="pokemon" onClick={() => sethidden("visible")}>
                    <div className="pokemonInfo">
                        <p>
                            #{pokemon.id}
                        </p>
                        <h1>
                            {pokemon.name}
                        </h1>
                    </div>

                    <img src={pokemon.sprites.front_default} alt="Pokemon sprite" className="sprite" />
                </div>


                <div className={"pokemonDetailed " + hidden}>
                    <div className="exitButton" onClick={() => sethidden("hidden")}>
                        X
                    </div>
                    <PokemonDetailed pokemon={pokemon} />
                </div>
            </>

    )
}

export default Pokemon;