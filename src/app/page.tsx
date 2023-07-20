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
    const url = `https://www.omdbapi.com/?s=${searchValue}&apikey=a4b00c0`;

    const response = await fetch(url).then((res) => res.json());

    setMovies(response.Search);
    console.log("result", response.Search);
  };

  useEffect(() => {
    getMovies();
  }, [searchValue]);
  return (
    <main className="flex min-h-screen flex-col items-center  p-4 sm:p-24">
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-slate-900 gap-4 p-8 rounded-lg">
        <div className="flex items-center justify-center md:justify-start gap-4 w-full">
          <h1 className="text-4xl font-semibold text-white">Movie Search</h1>
          <BiSolidCameraMovie fill="white" size={40} />
        </div>
        <SearchForm searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
      <div className="w-full my-4">
        <MoviesList movies={movies} />
      </div>
    </main>
  );
}
