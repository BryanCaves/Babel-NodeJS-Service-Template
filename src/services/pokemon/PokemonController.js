import { getPokemon } from './providers/PokeApiProvider';

export const getPokemonByName = async (name) => {
    if(name) {
        return await getPokemon(name);
    }
    return {
        type: "Pokemon",
        data: []
    }
};