import PokedexSideBar from "@/components/PokedexSidebar"
import { getAllPokemon } from "utils/getAllPokemon"

export default async function PokedexLayout({ children }) {
    const allPokemon = await getAllPokemon();

    return (
        <>
            <div style={{display: "flex"}}>
                <div>
                    <PokedexSideBar pokemonList={allPokemon.results}/>
                </div>
                <div>
                    {children}
                </div>
            </div>

        </>
    )
}

export const dynamicParams = false;