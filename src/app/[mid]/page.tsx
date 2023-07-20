"use client";
import { Movie } from "@/app/interfaces/Movie";
import { useEffect, useState } from "react";
import { MovieDetail } from "../interfaces/MovieDetail";
import MovieInfo from "../components/MovieInfo";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function Movie({
  params: { mid },
}: {
  params: { mid: string };
}) {
  const [movie, setMovie] = useState<MovieDetail>({
    Title: "",
    Year: "",
    Rated: "",
    Released: "",
    Runtime: "",
    Genre: "",
    Director: "",
    Writer: "",
    Actors: "",
    Plot: "",
    Language: "",
    Country: "",
    Awards: "",
    Poster: "",
  });

  const getMovieDetail = async () => {
    const url = `https://www.omdbapi.com/?i=${mid}&apikey=a4b00c0`;
    console.log("URL", url);
    const response = await fetch(url).then((res) => res.json());
    console.log(response);
    if (response) {
      setMovie(response);
    }
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:px-96">
      <Link
        className="flex items-center self-start justify-center my-4 rounded-full text-white bg-slate-900 h-12 w-12"
        href={`/`}
      >
        <FaArrowLeft />
      </Link>
      <MovieInfo movie={movie} />
    </main>
  );
}
