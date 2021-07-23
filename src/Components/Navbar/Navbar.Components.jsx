import React from "react";
import { BiChevronRight, BiSearch,BiChevronDown, BiMenu } from "react-icons/bi";
//Create a function for small screen
const NavSm= ()=> {
    return (
       <>
       <div className="text-white flex items-center justify-between">
           <div>
               <h3 className="text-xl font-bold">Its All Starts Here!</h3>
               <span className= "text-gray-400 text-xs flex items-center">Bengaluru 
                   <BiChevronRight /> 
               </span>
           </div>
           <div className= "w-8 h-8">
               <BiSearch className= "w-full h-full" />
           </div>
       </div>

       </>
    );
}
//Create a function for Medium screen
const NavMd= ()=> {
    return (
       <>
        <div className="w-full flex items-center gap-3 p-2 bg-white rounded">
            <BiSearch />
            <input type="search" className="w-full bg-transparent border-none  focus:outline-none" placeholder= "Search for movies, events, plays, sports and activities" />
        </div>
        
       </>
    );
}
//Create a function for large screen
const NavLg= ()=> {
    return (
       <>
        <div className="container mx-auto px-4 flex items-center justify-between">
            <div className="flex items-center w-1/2 gap-3">
                <div className="w-12 h-12">
                   <img src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png" alt="logo" className="w-full h-full" />
                </div>
                <div className="w-full flex items-center gap-3 bg-white text-gray-500 px-3 py-2 rounded-md">
                     <BiSearch />
                     <input type="search" className="w-full bg-transparent border-none focus:outline-none" placeholder="Search for movies, events, Plays, Sports and Activities." />

                </div>
            </div>
            <div className="flex items-center gap-3">
                  <span className="text-gray-200 text-xs flex items-center hover:text-white cursor-pointer">
                     Bengaluru <BiChevronDown />
                  </span>
                  <button className="bg-red-600 text-white px-2 py-1 text-sm rounded cursor-pointer">
                    Sign in
                  </button>
                  <div className= "text-white w-7 h-7 cursor-pointer">
                      <BiMenu className= "w-full h-full" />
                  </div>
            </div>
        </div>
       </>
    );
}


const Navbar= ()=> {
    return (
      <>
       <nav className= "bg-gray-800 text-white p-2">
           {/*For Mobile Screen*/}
           <div className= "md:hidden">
               <NavSm />
           </div>
           {/*For Medium screen Screen*/}
           <div className= "hidden md:flex lg:hidden">
               <NavMd />
           </div>
           {/*For large Screen*/}
           <div className= "hidden w-full lg:flex">
               <NavLg />
           </div>

       </nav>


      </>
    );
}

export default Navbar;


