'use client'

import { Heading } from "@chakra-ui/react"
import Image from "next/image"

export default function PokemonOverview({pokemon}) {
    
    return (
        <>
            <Heading>{pokemon.name}</Heading>
            <Image alt={`front defualt image of ${pokemon.name}`} src={pokemon.sprites.front_default} width={100} height={100} />
        </>
    )
}