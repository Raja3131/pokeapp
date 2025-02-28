"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { typeColors } from "../types/color";

interface Pokemon {
  id: number;
  name: string;
  image: string | null;
  type: string;
}

export default function PokemonList({ pokemon }: { pokemon: Pokemon[] }) {
  const [filteredPokemon, setFilteredPokemon] = useState<Pokemon[]>(pokemon);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const pokemonPerPage = 20;

  useEffect(() => {
    const handler = setTimeout(() => {
      if (!searchQuery.trim()) {
        setFilteredPokemon(pokemon);
      } else {
        setFilteredPokemon(
          pokemon.filter((p) =>
            p.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setCurrentPage(1);
      }
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery, pokemon]);

  const indexOfLastPokemon = currentPage * pokemonPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonPerPage;
  const currentPokemon = filteredPokemon.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const totalNumberPages = Math.ceil(filteredPokemon.length / pokemonPerPage);

  return (
    <div className="w-full max-w-5xl">
      <Search
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-300 mb-8"
      />

      {!currentPokemon.length && <p className="text-gray-500 text-lg">No Pokémon found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        {currentPokemon.map((poke) => (
          <Link key={poke.id} href={`/pokemons/${poke.id}`} className="block">
            <div className="bg-white rounded-2xl shadow-lg p-5 cursor-pointer hover:shadow-2xl transition-transform hover:scale-105 hover:bg-gray-100 border border-gray-200">
              <div className="flex justify-center">
                {poke.image && (
                  <Image
                    src={poke.image}
                    alt={poke.name}
                    width={120}
                    height={120}
                    priority
                    className="object-contain drop-shadow-lg"
                  />
                )}
              </div>
              <h2 className="text-2xl font-extrabold text-gray-800 capitalize text-center mt-3">
                {poke.name}
              </h2>

              <div className="flex justify-center gap-2 mt-3">
                {poke.type.split(", ").map((t) => (
                  <span
                    key={t}
                    className={`text-white px-3 py-1 rounded-full text-sm font-semibold shadow-md ${
                      typeColors[t] || "bg-gray-500"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="w-full h-2 mt-4 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"></div>
            </div>
          </Link>
        ))}
      </div>

      {filteredPokemon.length > 20 && (
        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-sky-500"
          >
            Previous
          </button>
          <span className="text-gray-500 text-lg px-4 py-2 rounded cursor-default">
            Page {currentPage} of {totalNumberPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalNumberPages))}
            disabled={currentPage === totalNumberPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50 hover:bg-sky-500"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
