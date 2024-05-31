import { createContext, useContext, useEffect, useState } from "react";

// creates context with
export const movieDataContext = createContext(null);
export const movieDispatchContext = createContext(null);


// allows use of the variable throughout the project
export function useMovieDataContext(){
	return useContext(movieDataContext);
}

export function useMovieDispatch(){
    return useContext(movieDispatchContext);
}

export function MovieProvider({children}){
    // state for the global variable
    const [movie, setMovie] = useState({ title: "", releaseDate: "", posterPath: "" });
    // gets movie from api
    const getMovie = async () => {
        try {
            let randomList = Math.floor(Math.random() * 50);

            const fetch = require('node-fetch');
            // pick page random from 1 to 50 of top movies
            const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=' + randomList;
            // allows me access to api using correct method and bearer token
            const options = {
              method: 'GET',
              headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYThmMmIwZmRmMTFmMTRiNzUzODU3N2M4ZDYwNmQyMyIsInN1YiI6IjY2NTg1MDI3ZGFiNzdjY2E0ZTFkMjU2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18nU0BUoAjXyqswDbjQYznCVtJXigmM0csbqz-_qcnA'
              }
            };

            let randomNum =  Math.floor(Math.random() * 20);
            const response = await fetch(url, options);
            const json = await response.json();
            console.log(json);
          
            // chooses random movie from page with associated values    
            setMovie({
                title: json.results[randomNum].title,
                releaseDate: json.results[randomNum].release_date,
                posterPath: "http://image.tmdb.org/t/p/w500/" + json.results[randomNum].poster_path
            });
    
        } 
        
        catch (err) {
          console.error('error:', err);
        }
      };
    
      useEffect(() => {
        getMovie();
      }, []);

    return(
        <movieDataContext.Provider value={movie}>
            <movieDispatchContext.Provider value={getMovie}>
                {children}
            </movieDispatchContext.Provider>
        </movieDataContext.Provider>
    )

}