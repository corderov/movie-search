import { Movie } from "@/app/interfaces/Movie";
import { ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
type MovieCardProps = {
  movie: Movie;
};
export default function MovieCard(props: MovieCardProps): ReactElement {
  const { movie } = props;
  return (
    <Link
      href={`/${movie.imdbID}`}
      className="transition ease-in-out hover:-translate-y-1 duration-300"
    >
      <Image height={230} width={230} src={movie.Poster} alt="poster movie" />
    </Link>
  );
}
