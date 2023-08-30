import React from "react";



const Footer = ()=>{
    return(
        <>
    <footer className='mt-1  '>
        
        <img className=' w-full  h-36 object-fill    sm:  ' src="./imagenes/Rectangle14.png" alt="" style={{borderRadius:"0% 0% 50% 50%",}}/>
        <div className="flex flex-col gap-3 items-center  justify-evenly mt-4 sm:flex-row">
          <div className=" flex  items-center w-1/4  gap-3">
            <p className="">Home</p>
            <p className="">Manga</p>
          </div>
          <img  className="w-1/4  h-1/4 " src="./imagenes/inga.png" alt="" />
          <div className="h-16 w-1/4 flex flex-col items-center justify-center gap-1">
         <div className="flex   h-1/4 justify-center  gap-1">
            <img  className="h-1/1" src="./imagenes/YOUTUBE_icon-icons.com_65487.png" alt="" />
            <img  className="h-1/1" src="./imagenes/vimeo_v_logo_icon_144759.png" alt="" />
            <img className="h-1/1"  src="./imagenes/facebooksquarebutton_87817 (1).png" alt="" />
            <img  className="h-1/1" src="./imagenes/1485969399-twitersocialnetworkbrandlogo_78853 (1).png" alt="" />
            </div>
            <div className="flex bg-blue-500 items-center justify-center gap-1 h-1/4 w-full sm:w-20 " style={{borderRadius:"10px"}}>
                <button class="rounded-full  ">Donate</button>
                <img className="h-3/4 font-bold" src="./imagenes/like_favorite_heart_5759.png" alt="" />
            </div>
        </div>
            
        </div>
        
        </footer>
        
          </>
    )
}

export default Footer;