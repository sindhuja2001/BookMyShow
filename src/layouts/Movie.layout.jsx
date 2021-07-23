import React, {useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
// Components
import Movienavbar from "../Components/Navbar/Movienavbar.Components";

//Movie Context
import { MovieContext } from "../Context/Movie.Context";

//import axios
import axios from "axios";
const Movielayout = (props) => {

  const {id}= useParams();
  const {movie, setMovie}= useContext(MovieContext);


  useEffect(()=> {
    const requestMovie= async ()=> {
      const getMovieData= await axios.get(`/movie/${id}`);
      setMovie(getMovieData.data);
    }
    requestMovie();
  }, [id]);
    return (
      <>
        <Movienavbar />
       
        {props.children}
      </>
    );
  };
export default Movielayout;


