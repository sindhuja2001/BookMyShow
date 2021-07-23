import React from "react";

 export const NextArrow= (props)=> {    {/*Classname, Style, Onclick in default from React-slick for props*/}
   return (
     <>

       <div className= {props.className}
            style= {{...props.style, backgroundColor: "gray"}}
            onClick= {props.onClick} 
       />


    </>
   );
   
};

export const PrevArrow= (props)=> {
    return(
      <>
 
        <div className= {props.className}
             style= {{...props.style, backgroundColor: "gray"}}
             onClick= {props.onClick} 
        
        />
        
        
        


      </>
    );
    
 };


