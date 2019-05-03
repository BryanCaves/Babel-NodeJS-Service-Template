import healthRoutes from './health/routes'
import pokemonRoutes from './pokemon/routes';

export default [...healthRoutes, ...pokemonRoutes];