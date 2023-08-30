import React from "react";
 const Hero =()=>{
    return ( 
<section className='h-1/2 w-full absolute top-4  flex items-center text-white text-center flex-col  mt-10'  style={{translate:"0% 15%"}}>
            <h1 className='text-2xl '>your favorite comic book store ✨</h1>
            <p className='text-sm '>Explore our catalog to live the adventure <br/> of your life</p>
             <button className='p-1 mt-4 text-xs px-2 bg-blue-600 h-8 w-1/2 sm:w-20' style={{borderRadius:'50px'}} > let´s go!</button>
            </section>
            )
 }
 export default Hero;