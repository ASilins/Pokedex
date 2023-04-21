import Pokemon from "./Pokemon";

import "../css/Pokemon.css"

function PokemonList(props) {

    let pokemons = props.data.map((item, index) =>
        <Pokemon url={item.url} key={index} />
    );

    return (
        <div className="pokemonList">
            {pokemons}
        </div>
    );
};

export default PokemonList;