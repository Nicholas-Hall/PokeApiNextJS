"use client"
import { useRef,useState} from 'react';
import Link from 'next/link';
import {getPokemonId} from "@/utils";
import { Box, Input, Text, useDimensions,VStack } from '@chakra-ui/react';

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
            <Box height={`calc(100vh - ${dimensions?.marginBox.height}px - 8px)`} overflowY="scroll">
                {filteredPokemonList.map(pokemon => (
                    <Box key={pokemon}>
                        <Link href={`/pokedex/${getPokemonId(pokemon)}`}>
                            <Text textTransform="capitalize">
                                {pokemon.name}
                            </Text>
                        </Link>
                    </Box>
                ))}
            </Box>
        </VStack>
    )
}