import { useEffect, useState } from "react";

export default function MovieCard() {
  const [movie, setMovie] = useState({ title: "", releaseDate: "", posterPath: ""});
  let randomList = Math.floor(Math.random() * 50);
  const fetch = require('node-fetch');
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=' + randomList;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmMmIwZmRmMTFmMTRiNzUzODU3N2M4ZDYwNmQyMyIsInN1YiI6IjY2NTg1MDI3ZGFiNzdjY2E0ZTFkMjU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18nU0BUoAjXyqswDbjQYznCVtJXigmM0csbqz-_qcnA'
    }
  };

  const getMovie = async () => {
    try {
      let randomNum =  Math.floor(Math.random() * 20);
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      
      setMovie({
        title: json.results[randomNum].title,
        releaseDate: json.results[randomNum].release_date,
        posterPath: "http://image.tmdb.org/t/p/w500/" + json.results[randomNum].poster_path
      });

    } catch (err) {
      console.error('error:', err);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

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
