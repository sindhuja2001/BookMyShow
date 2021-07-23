import React, { useState } from "react";


export const MovieContext= React.createContext();    //Created but Empty

const MovieProvider= ({ children }) => {     
    //Provider is that holds the default data  
    //Children is initialized just that it must be allocated only to the movie page. 
    


    const [movie,  setMovie]= useState({
         id: 0,
         original_title: "",
         overview: "",
         backdrop_path: "",
         poster_path: "",
    });
    return <MovieContext.Provider value= {{movie, setMovie}}>
        { children }
    </MovieContext.Provider>


}

export default MovieProvider;