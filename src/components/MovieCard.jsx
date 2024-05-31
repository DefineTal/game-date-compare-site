import { useMovieDataContext, useMovieDispatch } from "../contexts/movieContext";


export default function MovieCard() {
  // uses movie context from parent
  const movie = useMovieDataContext();
  const getMovie = useMovieDispatch();

  return (
    <section className="movie-card">
      <img className="movie-image" src={movie.posterPath} alt="Movie Poster"/>
      <h2>{movie.title}</h2>
      {/* <p>Release Date: {movie.releaseDate}</p> */}
      {/* <button className="give-up" onClick={getMovie}>
        Give up
      </button> */}
    </section>
  );
}
