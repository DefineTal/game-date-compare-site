import MovieCard from "./components/MovieCard";
import { MovieProvider } from "./contexts/movieContext";


function App() {
  return (
    <div className="App">
      <MovieProvider>
        <MovieCard/>
      </MovieProvider>
    </div>
  );
}

export default App;
