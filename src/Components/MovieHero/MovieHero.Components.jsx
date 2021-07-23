import React, {useContext} from "react";
import { MovieContext } from "../../Context/Movie.Context";
import Movieinfo from "./Movieinfo.Components";



const MovieHero= ()=> {
    const {movie}= useContext(MovieContext);
    return(
        <>
    <div>
        {/*For Mobile Screen*/}
         <div className= "relative md:hidden w-full" style= {{height: "calc(180vw)"}}>
            <div className= "absolute z-20 bottom-4 left-4">
                    <Movieinfo />
            </div>
            <div className= "w-full h-56 absolute bottom-0 bg-black z-10 bg-opacity-50" />
           <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
           alt= "poster" 
           className= "w-full h-full" />
        </div>



        {/*For Lap/tab Screen*/}
        <div className= "relative hidden lg:hidden w-full md:block" style= {{height: "calc(100vw)"}}>
            <div className= "absolute z-20 bottom-4">
                    <Movieinfo />
            </div>
           <div className= "w-full h-56 absolute bottom-0 bg-black z-10 bg-opacity-50" />
           <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
           alt= "background"
           className= "w-full h-full" />

        </div>




        {/*For Large Screen*/}
        <div className="relative hidden w-full lg:block" style={{ height: "30rem" }}>
           
          <div className="absolute z-10 w-full h-full" style={{backgroundImage:
                "linear-gradient(90deg, rgb(34, 34, 34) 24.97%, rgb(34, 34, 34) 38.3%, rgba(34, 34, 34, 0.04) 97.47%, rgb(34, 34, 34) 100%)",
            }}/>

            <div className= "absolute z-30 left-24 top-10 flex items-center gap-10">
                <div className="w-64 h-96">
                    <img src= {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                     alt="poster"
                      className="w-full h-full rounded-xl"/>
                </div>
                <div>
                    <Movieinfo />
                </div>
            </div>
            <img src= {`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
             alt="poster"
              className="w-full h-full" />

          


        
       </div>
    </div>
        
        </>
    );
}


export default MovieHero;