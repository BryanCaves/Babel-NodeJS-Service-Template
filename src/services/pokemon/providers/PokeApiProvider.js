import request from "request-promise";

export const getPokemon = async (name) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await request(url);
    return JSON.parse(response);
};