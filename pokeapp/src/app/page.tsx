// app/page.tsx (Server Component)
import { getPokemonData } from "./lib/getPokemonData";
import PokemonList from "./components/PokemonList";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default async function Home() {
  const pokemon = await getPokemonData(); 
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center p-8">
        <PokemonList pokemon={pokemon} />
      </main>
      <Footer />
    </div>
  );
}
