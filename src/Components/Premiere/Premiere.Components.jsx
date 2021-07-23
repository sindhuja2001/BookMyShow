import React from "react";
import Slider from "react-slick";
//Import Poster/Postercarousel/PremiereImages component
import Poster from "../Poster/Poster.Components";
import PosterCarouselSettings from "../../config/PosterCarousel.config";
import PremierImages from "../../config/TempPosters.config";

export const Premiere= ()=> {

    return(
        <>
        <div className= "flex flex-col items-start m-4">
          <h3 className= "text-white text-xl font-bold p-1">Premieres</h3>
          <p className= "text-white text-sm">Brand new release every  Friday</p>
        </div>
       <Slider {...PosterCarouselSettings} >
           {PremierImages.map((image)=> (
               <Poster {...image} isDark />
           ))}
       </Slider>
        </>
    );
};

export default Premiere;