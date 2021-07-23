import React, {useContext, useState} from "react";

//context
import { MovieContext } from "../../Context/Movie.Context";

//components
import PaymentModel from "../PaymentModel/Payment.Components";

const Movieinfo= ()=> {
    const {movie}= useContext(MovieContext);
    const [isOpen, setIsOpen]= useState(false);
    const [price, setPrice]= useState(0);

    //?-> Optional chaining
    const genres= movie.genres?.map(({ name })=> name).join(", ");   //Join will return each word with comma spaced
    const rentMovies= ()=> {
        setIsOpen(true);
        setPrice(149);
    };
    const buyMovies= ()=> {
        setIsOpen(true);
        setPrice(49);
    };
    
    
    
    return(
        <>
        <PaymentModel setIsOpen= {setIsOpen} isOpen= {isOpen} price= {price}/>
        <div className= "flex flex-col gap-3  lg:gap-8">
            <div className= "flex items-center gap-3 md:px-4">
                <div className= "w-40 h-8 ">
                    <img src= "https://in.bmscdn.com/moviemode/tvod/premiere-tag.png" alt= "Premiere" 
                     className= "w-full h-full"
                    />
                </div>
                <span className= "bg-gray-800 p-1 text-xs text-white rounded-md">Streaming Now</span>
            </div>
            <h1 className= "text-white lg:text-4xl font-bold hidden lg:block">{movie.original_title}</h1>
            <div className= "flex flex-col-reverse lg:flex-col gap-3">
                <div className="text-white font-light flex flex-col gap-2 md:px-4">
                   <h4>4k &bull; {movie.original_language}</h4>
                   <h4>{(movie.runtime / 60).toFixed(2)} h &bull; {genres} &bull; 15+</h4>
              
                </div>
                <div className= "flex items-center gap-3 md:px-4 md:w-screen lg:w-full">
                    <button onClick= {rentMovies} className= "bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Buy ₹149</button>
            
                    <button onClick= {buyMovies} className= "bg-red-600 w-full py-3 text-white font-semibold rounded-lg">Rent ₹49</button>
                </div>
            </div>
        </div>
        </>
    );
}


export default Movieinfo;