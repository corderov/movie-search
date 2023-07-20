"use client";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MovieList";
import { useEffect, useState } from "react";
import { Movie } from "./interfaces/Movie";
import { BiSolidCameraMovie } from "react-icons/bi";

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");

  const getMovies = async () => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a4b00c0`;

    const response = await fetch(url).then((res) => res.json());

    setMovies(response.Search);
    console.log("result", response.Search);
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex justify-between w-full bg-slate-900 gap-2 p-8 rounded-lg">
        <div className="flex items-center gap-2">
          <h1 className="text-4xl font-semibold text-white">Movie Search</h1>
          <BiSolidCameraMovie fill="white" size={40} />
        </div>
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="w-full">
        <MoviesList movies={movies} />
      </div>
    </main>
  );
}
