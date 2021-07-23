import React, {useState, useEffect} from "react";
import Slider from "react-slick";
import axios from "axios";

//Import Arrow Component
import { NextArrow, PrevArrow } from "./Arrows.Components";



const Carousel= ()=> {
    const [images, setImages]= useState([]);

    useEffect(()=> {
        const requestPlayingMovies= async ()=> {
            const getImages= await axios.get("/movie/now_playing");
            //console.log(getImages);  

            setImages(getImages.data.results);
        };

        requestPlayingMovies();
        
    }, []);

    const settingsLG= {
        arrows: true,
        centerMode: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        centerPadding: "300px",
        slidesToScroll: 1,
        dots: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    const settings = {
        arrows: true,
       centerPadding: "200px",
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };


    
    return(
        <>

        <div className= "lg:hidden">   {/*For mobile and medium screen devices*/}
            <Slider {...settings}>
               {images.map((image)=> (
                   <div className= "w-full h-56 md:h-80 py-3">
                       <img src={`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="testing" className="w-full h-full" />
                    </div>
                ))}
            
            </Slider>
        </div>

        <div className= "hidden lg:block">   {/*For Large screen devices*/}
            <Slider {...settingsLG}>
               {images.map((image)=> (
                   <div className= "w-full h-96 px-2 py-3">
                       <img src= {`https://image.tmdb.org/t/p/original${image.backdrop_path}`} alt="Image" className= "w-full h-full rounded-md" />
                   </div>
                ))}
            
            </Slider>
        </div>

        
        
        
        </>
    );
    
};


export default Carousel;