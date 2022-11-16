import Image from 'next/image';
import {getAllPokemon, getPokemonId} from "@/utils";

async function getOnePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data');
    }
  
    return res.json();
}


export async function generateStaticParams() {
    const allPokemon = await getAllPokemon();
  
    return allPokemon.results.map((pokemon) => ({
      id: getPokemonId(pokemon)
    }));
}

export default async function Page({ params }) {
    const pokemon = await getOnePokemon(params.id);

    return (
        <>
            <h1>{pokemon.name}</h1>
            <Image alt={`front defualt image of ${pokemon.name}`} src={pokemon.sprites.front_default} width={100} height={100} />
        </>
    );
}