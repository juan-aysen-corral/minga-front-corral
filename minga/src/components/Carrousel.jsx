import React,{useState,useEffect} from "react";
import axios from "axios";

const Carrousel = ()=>{
    let [counter,setCounter]=useState(0)
    let [categorias,setCategorias]=useState([])

    let url ="https://minga-back-vyqy.onrender.com/categories"
let titulos=["b","f","r"]

    let prev=()=>{
        (counter!==0)? (setCounter(counter-1)): (setCounter(titulos.length-1))
    }
    let next =()=>{
        (counter!==titulos.length-1)? (setCounter(counter+1)): (setCounter(0))
    }
    function getData(){
        axios(url)
        .then(res=>setCategorias(res.data.categories))
        .catch((err)=>console.log("error"))

    }
    useEffect(()=>{
        getData()
    },[])
    return( 
        <div  className='px-16 sm:h-1/2 flex items-center sm:py-12 lg:h-1/2'  >
          <div className=' relative hidden sm:flex flex-row bg-violet-800 sm:h-52  w-full  justify-between items-center ' style={{borderRadius:"10px"}}>
           
            <img className='h-4 w-4 ml-2 cursor-pointer' onClick={prev} style={{borderRadius:"50%",translate:"0% 50%", rotate:("180deg")}} src="../imagenes/Vector (Stroke).jpg" alt="" />
            
            
            <img style={{translate:"5% -10%"}} className='ml-2  sm:w-1/5 sm:h-60 object-cover' src="../imagenes/29eba9990120382f731a1ae7dbe1a54d 1.png" alt="" />
          
            <img  className='md:w-36 lg:w-36 lg:h-52 md:h-48 sm:h-48 sm:w-32  object-fill w-10' style={{translate:"0% -15%"}} src="../imagenes/image 3 (1).png" alt="" />
            
          <div className='text-left  w-1/4 flex wrap flex-col 'style={{translate:"0% 0%"}} >
            <h2 className='text-xl' >{categorias[counter]?.name}</h2>
            <p className='lg:text-xs block' style={{fontSize:"0.5rem"  }}>Is the manga that is aimed at adolescent boys. They are series with large amounts of action, in which humorous situations often occur. The camaraderie between members of a collective or a combat team stands out.</p>
          </div>
          <img className='h-4 w-4 cursor-pointer mr-2' onClick={next} style={{borderRadius:"50%",translate:"0% 50%"}} src="../imagenes/Vector (Stroke).jpg" alt="" />
          
          </div>
          </div>
    )
}

export default Carrousel;