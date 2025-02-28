import {getPokemonDetail} from "../../lib/getPokemonData"
import PokemonDetail from "../../components/PokemonDetail"
export default async function PokemonDetailPage({
  params,
}: {
  params: { pokemonId: string };
}) {
  if (!params?.pokemonId) {
    return <p className="text-red-500 text-center">Invalid Pokémon ID</p>;
  }

  const pokemon = await getPokemonDetail(params.pokemonId);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <PokemonDetail pokemon={pokemon} />
    </div>
  );
}
