"use client"
import {useState} from 'react';
import Link from 'next/link';
import {getPokemonId} from "@/utils";

export default function PokedexSideBar({pokemonList}) {
    const [searchText, setSearchText] = useState("");
    const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.includes(searchText));

    return (
        <>
            <div>
                <input onChange={e => setSearchText(e.target.value)} />
            </div>
            <div>
                {filteredPokemonList.map(pokemon => (
                    <div key={pokemon}>
                        <Link href={`/pokedex/${getPokemonId(pokemon)}`}>{pokemon.name}</Link>
                    </div>
                ))}
            </div>
        </>
    )
}