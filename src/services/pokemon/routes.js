import { getPokemonByName } from './PokemonController';

export default [
    {
        path: "/api/v1/pokemon",
        method: "get",
        handler: async (req, res, next) => {
            try {
                const result = await getPokemonByName(req.query.name);
                res.status(200).send(result);
            }
            catch(err) {
                next(err);
            }
        } 
    }
]