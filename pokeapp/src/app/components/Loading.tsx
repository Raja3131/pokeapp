"use client";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <div className="w-16 h-16 border-8 border-red-500 border-t-white border-b-black rounded-full animate-spin"></div>

      <p className="mt-4 text-lg font-semibold text-gray-700">Loading Pokémon...</p>
    </div>
  );
}
