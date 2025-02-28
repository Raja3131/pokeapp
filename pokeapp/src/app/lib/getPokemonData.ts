export const getPokemonData= async() =>{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=351");
    if (!response.ok) throw new Error("Failed to fetch Pokémon data");
    const data = await response.json();
  
    const pokemonDetails = await Promise.all(
      data.results.map(async (p: { url: string }) => {
        const res = await fetch(p.url);
        if (!res.ok) return null;
        const details = await res.json();
  
        return {
          id: details.id,
          name: details.name,
          image: details.sprites?.front_default || null,
          type: details.types.map((t: any) => t.type.name).join(", "),
        };
      })
    );
  
    return pokemonDetails.filter(Boolean); 
  }

  
export const getPokemonDetail =async(pokemonId: string) =>{
  if (!pokemonId) throw new Error("No Pokémon ID provided");

  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
  if (!response.ok) throw new Error("Failed to fetch Pokémon data");

  const data = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: data.sprites?.front_default || null,
    types: data.types.map((t: any) => t.type.name),
    height: data.height / 10, 
    weight: data.weight / 10, 
    moves: data.moves.slice(0, 5).map((m: any) => m.move.name),
  };
}
