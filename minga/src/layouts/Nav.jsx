import React, { useState } from "react";
import { Outlet } from "react-router-dom";


const Nav = ()=>{
    let [open, setOpen] = useState(false)

    let Drawer = () => (
        <div className="h-screen w-full   absolute  top-0 left-0 bg-gradient-to-b from-blue-900 to-black z-10 sm:w-1/4 sm:h-screen  " >
            <img className=" absolute top-0 right-0 cursor-pointer" onClick={()=>setOpen(false)} src="../imagenes/cerrar-simbolo-de-boton-circular.png" alt="" />
            <div className="text-white flex flex-col mt-4 gap-2">
                <p className="hover:bg-sky-700 cursor-pointer">Home</p>
                <p className="hover:bg-sky-700 cursor-pointer">Log in</p>
                <p className="hover:bg-sky-700 cursor-pointer">Registre</p>
            </div>
        </div>
    )


    return(
        
         <>
        <nav className='absolute  top-0 left-0 w-full p-4  flex justify-between  '>
            <img className=" cursor-pointer" onClick={()=>setOpen(true)} src="../imagenes/Menu.png" alt="" />
            <img src="../imagenes/Logo(1) 3.png" alt="" />
          </nav>
          { open ? <Drawer/> : null}
          </>
          
    )
}

export default Nav;