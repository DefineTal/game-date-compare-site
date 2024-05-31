import { useMovieDataContext, useMovieDispatch } from "../contexts/movieContext";


export default function MovieCard() {
  const movie = useMovieDataContext();
  const getMovie = useMovieDispatch();

  return (
    <section class="movie-card">
      <img class="movie-image" src={movie.posterPath} alt="Movie Poster"/>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
      <button class="give-up" onClick={getMovie}>
        Give up
      </button>
    </section>
  );
}
