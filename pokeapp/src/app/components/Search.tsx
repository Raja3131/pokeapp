import { ChangeEvent } from "react";

interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  className?: string;
}

export default function Search({ searchQuery, setSearchQuery,className }: SearchProps) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e: ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
        placeholder="Search Pokémon..."
        className={className}
    />
  );
}
