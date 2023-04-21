import { useEffect, useState } from "react";
import PokemonList from "../components/PokemonList";

import "../css/Home.css"
import NavBar from "../components/NavBar";

function Home() {
    const [page, setPage] = useState();
    const [pokemon, setPokemon] = useState();

    const fetchData = url => {
        setPage(null);

        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setPage(data);
                setPokemon(data.results);
            });
    };

    useEffect(() => {
        fetchData("https://pokeapi.co/api/v2/pokemon?limit=20&offset=0")
    }, []);

    const handlePrev = () => {
        fetchData(page.previous);
    };

    const handleNext = () => {
        fetchData(page.next);
    };

    return (
        page == null || pokemon == null ? "Loading..." :
            <div>
                <NavBar />
                <PokemonList data={pokemon} />
                <div className="buttons">
                    <button disabled={page.previous == null ? true : false} onClick={handlePrev}>Prev</button>
                    <button disabled={page.next == null ? true : false} onClick={handleNext}>Next</button>
                </div>
            </div>
    )
}

export default Home;