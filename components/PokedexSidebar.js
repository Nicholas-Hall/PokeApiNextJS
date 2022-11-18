"use client"
import { useRef,useState} from 'react';
import Link from 'next/link';
import {getPokemonId} from "@/utils";
import { Box, Input, useDimensions,VStack } from '@chakra-ui/react';

export default function PokedexSideBar({pokemonList}) {
    const elementRef = useRef()
    const dimensions = useDimensions(elementRef)
    const [searchText, setSearchText] = useState("");
    const filteredPokemonList = pokemonList.filter(pokemon => pokemon.name.toLowerCase().includes(searchText.toLocaleLowerCase()));

    return (
        <VStack>
            <Box ref={elementRef}>
                <Input placeholder="Search" onChange={e => setSearchText(e.target.value)} />
            </Box>
            <Box height={`calc(100vh - ${dimensions?.marginBox.height}px - 8px)`}>
                {filteredPokemonList.map(pokemon => (
                    <Box key={pokemon}>
                        <Link href={`/pokedex/${getPokemonId(pokemon)}`}>{pokemon.name}</Link>
                    </Box>
                ))}
            </Box>
        </VStack>
    )
}