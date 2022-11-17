import {getAllPokemon, getPokemonId} from "@/utils";
import PokemonOverview from '@/components/PokemonOverview';
import { notFound } from "next/navigation"

async function getOnePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      return undefined;
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

    if (!pokemon) {
      notFound();
    }

    return (
      <PokemonOverview pokemon={pokemon} />
    );
}