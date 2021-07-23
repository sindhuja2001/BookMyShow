import axios from "axios";

import React, { useEffect, useState } from "react";
// Components
import PosterSlider from "../Components/PosterSlider/PosterSlider.Components";
import EntertainmentCardSlider from "../Components/EntertainmentCard/EntertainmentCard.Components";


// config
import TempPosters from "../config/TempPosters.config";

const HomePage = () => {
  const [popularMovies, setpopularMovies]= useState([]);
  const [topRatedMovies, setTopRatedMovies]= useState([]);
  const [upcomingMovies,setUpcomingMovies]= useState([]);
  const [latestMovies,setLatestMovies]= useState([]);


//Popular Movies
  useEffect(()=> {
    const requestPopularMovies= async ()=> {
       const getpopularMovies= await axios.get("/movie/popular");
       setpopularMovies(getpopularMovies.data.results);
    };
    requestPopularMovies();
  }, []);

  //Top Rated Movies
  useEffect(()=> {
    const requestTopRatedMovies= async ()=> {
       const getTopRatedMovies= await axios.get("/movie/top_rated");
       setTopRatedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  //Upcoming Movies
  useEffect(()=> {
    const requestUpcomingMovies= async ()=> {
       const getUpcomingMovies= await axios.get("/movie/upcoming");
       setUpcomingMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);


  //Latest Movies
  useEffect(()=> {
    const requestLatestMovies= async ()=> {
       const getLatestMovies= await axios.get("/movie/upcoming");
       setLatestMovies(getLatestMovies.data.results);
    };
    requestLatestMovies();
  }, []);



  return (
    <>
      <div className="flex flex-col gap-10">
        <div className="container mx-auto px-4 ">
          <h1 className="text-2xl font-bold text-gray-800 my-3">
            The best of Entertainment
          </h1>
          <EntertainmentCardSlider />
        </div>

        <div className="bg-gray-800 py-12 ">
          <div className="container mx-auto px-4 flex flex-col gap-3">
            <div className="hidden md:flex">
              <img
                src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
                alt="Rupay"
                className="w-full h-full"
              />
            </div>
            <PosterSlider
              images={popularMovies}
              title="Premieres"
              subtitle="Brand new relases every friday"
              isDark
            />
          </div>
        </div>
      </div>
      <div class= "container mx-auto px-4 my-8">
           <PosterSlider
              images={topRatedMovies}
              title="Online Streaming Events"
             isDark= {false}
            />
      </div>
      <div class= "container mx-auto px-4 my-8">
           <PosterSlider
              images={upcomingMovies}
              title="Outdoor Events"
             isDark= {false}
            />
      </div>
      <div class= "container mx-auto px-4 my-8">
           <PosterSlider
              images={latestMovies}
              title="Laughter Therapy"
             isDark= {false}
            />
      </div>
      
     
    </>
  );
};

export default HomePage;

