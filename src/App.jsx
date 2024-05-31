import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import { MovieProvider } from "./contexts/movieContext";


function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header/>       
        <MovieCard/>
      </MovieProvider>
    </div>
  );
}

export default App;
