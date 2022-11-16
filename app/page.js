import Link from 'next/link';

// app/page.js
// This file maps to the index route (/)
export default function Page() {
    return (
        <>
            <h1> Welcome to Nick takes on PokeAPI!</h1>
            <Link href="/pokedex">Goto Pokedex!</Link>
        </>
    )
}