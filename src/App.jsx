import axios from "axios";
// HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";
import PlaysHOC from "./HOC/Plays.HOC";

//Pages
import HomePage from "./Pages/Home.Page";
import MoviePage from "./Pages/Movie.Page";
import Plays from "./Pages/Plays.Page";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL= "https://api.themoviedb.org/3";
axios.defaults.params= {};   //Create an empty object and assign an API key
axios.defaults.params["api_key"]= process.env.REACT_APP_API_KEY;

function App() {
  return (
    <>
      <DefaultHOC path="/" exact component={ HomePage } />
      <MovieHOC path="/movie/:id" exact component={ MoviePage } />
      <PlaysHOC path="/plays/:id" exact component={ Plays } />

    </>
  );
}

export default App;