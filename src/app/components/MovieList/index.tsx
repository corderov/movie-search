import { Movie } from "@/app/interfaces/Movie";
import { ReactElement } from "react";
import MovieCard from "../MovieCard";

type MoviesListProps = {
  movies: Movie[];
};

export default function MoviesList(props: MoviesListProps): ReactElement {
  const { movies } = props;
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(230px,1fr))] gap-4">
      {movies ? (
        <>
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </>
      ) : (
        <p className="p-4 col-span-full text-center text-white font-semibold text-lg">
          No results
        </p>
      )}
    </div>
  );
}
