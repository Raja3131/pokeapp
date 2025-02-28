"use client";

import Image from "next/image";
import { typeColors } from "../types/color";
import Loading from "./Loading";

interface Pokemon {
  id: number;
  name: string;
  image: string | null;
  types: string[];
  height: number;
  weight: number;
  moves: string[];
}

export default function PokemonDetail({ pokemon }: { pokemon: Pokemon }) {
  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-xl text-center w-full max-w-md mx-auto border border-gray-700">
      <h1 className="text-4xl font-extrabold capitalize text-white drop-shadow-lg">
        {pokemon.name}
      </h1>

      <div className="flex justify-center mt-4">
        {pokemon.image ? (
          <Image src={pokemon.image} alt={pokemon.name} width={200} height={200} />
        ) : (
          <Loading/>
        )}
      </div>

      <div className="bg-gray-700 p-5 rounded-xl shadow-md mt-6 text-center w-full border border-gray-600">
        <div className="flex justify-center gap-2 mb-4">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md ${
                typeColors[type] || "bg-gray-500"
              }`}
            >
              {type}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-300">
          <strong className="text-white">Height:</strong> {pokemon.height}m
        </p>
        <p className="text-lg text-gray-300 mt-2">
          <strong className="text-white">Weight:</strong> {pokemon.weight}kg
        </p>

        <h2 className="text-2xl font-bold text-white mt-6">Moves</h2>
        <ul className="text-lg text-gray-300 mt-2 space-y-1">
          {pokemon.moves.map((move) => (
            <li className="capitalize bg-gray-600 px-3 py-1 rounded-lg shadow" key={move}>
              {move}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-full h-2 mt-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"></div>
    </div>
  );
}
