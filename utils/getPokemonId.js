export function getPokemonId(pokemonEntryPoint) {
    const splitUrl = pokemonEntryPoint.url.split( '/' );
    return splitUrl[splitUrl.length -2];
}
