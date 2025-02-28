"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-blue-500 text-white py-4 px-8">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          PokeDex
        </Link>
      </div>
    </header>
  );
}
