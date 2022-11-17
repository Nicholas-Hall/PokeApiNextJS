'use client'

import Link from '@/components/Link'
import { Heading } from '@chakra-ui/react'

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <>
            <Heading> Welcome to Nick takes on PokeAPI!</Heading>
            <Link href="/pokedex">Pokedex</Link>
        </>
    )
}