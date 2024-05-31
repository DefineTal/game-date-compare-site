import { useMovieDataContext, useMovieDispatch } from "../contexts/movieContext";


export default function MovieCard() {
  const movie = useMovieDataContext();
  const getMovie = useMovieDispatch();

  return (
    <section>
      <img src={movie.posterPath} alt="Movie Poster"/>
      <h1>{movie.title}</h1>
      <p>Release Date: {movie.releaseDate}</p>
      <button onClick={getMovie}>
        Get a random movie
      </button>
    </section>
  );
}
