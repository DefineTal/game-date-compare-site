import Header from "./components/Header";
import MovieCard from "./components/MovieCard";
import UserInput from "./components/UserInput";
import { MovieProvider } from "./contexts/movieContext";


function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Header/>
        <div className="body-container">
          <UserInput/>       
          <MovieCard/>
        </div>
      </MovieProvider>
    </div>
  );
}


export default App;
