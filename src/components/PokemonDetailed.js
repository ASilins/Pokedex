import "../css/Pokemon.css"

function PokemonDetailed({ pokemon }) {
    let stats = pokemon.stats.map((item, index) =>
        <p key={index} className="cap">{item.stat.name}: {item.base_stat}</p>
    );
    return (
        <div className="pokemonDetailedBox">

            <p className="number">#{pokemon.id}</p>
            <div className="pokemonDetailedInfo">
                <img src={pokemon.sprites.front_default} alt="Pokemon sprite" className="sprite2" />
                <div>
                    <h1 className="cap">{pokemon.name}</h1>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    {stats}
                </div>
            </div>
        </div>
    );
}

export default PokemonDetailed;