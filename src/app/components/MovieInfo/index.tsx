import { ReactElement } from "react";
import { MovieDetail } from "../../interfaces/MovieDetail";
import Image from "next/image";

type MovieInfoProps = {
  movie: MovieDetail;
};

export default function MovieInfo(props: MovieInfoProps): ReactElement {
  const { movie } = props;
  return (
    <div className=" flex flex-col sm:flex-row items-center gap-8 bg-slate-900 p-4 rounded-xl w-full">
      <Image height={230} width={230} src={movie.Poster} alt="poster movie" />
      <div className="p-4">
        <div className="flex flex-col gap-4 text-white">
          <h1 className=" text-4xl font-semibold">{movie.Title}</h1>
          <p className="text-gray-600">
            {movie.Year} | {movie.Runtime} | {movie.Rated}
          </p>
          <p className="text-justify">{movie.Plot}</p>
          <div className="flex flex-col gap-4 my-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <h3 className="w-2/12 text-gray-600">Actors</h3>
              <p className="grow">{movie.Actors}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <h3 className="w-2/12 text-gray-600">Director</h3>
              <p className="grow">{movie.Director}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <h3 className="w-2/12 text-gray-600">Gender</h3>
              <p className="grow">{movie.Genre}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <h3 className="w-2/12 text-gray-600">Language</h3>
              <p className="grow">{movie.Language}</p>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <h3 className="w-2/12 text-gray-600">Writer</h3>
              <p className="grow">{movie.Writer}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
