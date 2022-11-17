import {getAllPokemon, getPokemonId} from "@/utils";
import PokemonOverview from '@/components/PokemonOverview';
import { notFound } from "next/navigation"

async function getOnePokemon(id) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  
    if (!res.ok) {
      notFound();
    }

    return res.json();
}


export async function generateStaticParams() {
    const allPokemon = await getAllPokemon();

    const staticParams = []
    allPokemon.results.map((pokemon) => {{
      staticParams.push({id: getPokemonId(pokemon)}, {id: pokemon.name});
    }});

    return staticParams;
}

export default async function Page({ params }) {
    const pokemon = await getOnePokemon(params.id);

    return (
      <PokemonOverview pokemon={pokemon} />
    );
}