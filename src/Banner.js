import{ React, useEffect, useState } from 'react'
import './Banner.css'
import instance from './instance'
import requests from './request'



function Banner() {

    const base_url = "https://image.tmdb.org/t/p/w500/"

    const [movie,setMovie]=useState({})

//apicall
const fetchData=async()=>{
   const response = await instance.get(requests.fetchTrending)
    setMovie(response.data.results[
    Math.floor(Math.random()*response.data.results.length)
   ]);

}

console.log(movie);

function truncate(str,n){
    return  str?.length>n?str?.substr(0,n-1)+'...':str

}

   useEffect(()=>{
       fetchData()
   },[])
   
   

  return (

    
    <div 
       className='banner'
       
        style={{
         backgroundImage:`url(${base_url}${movie.poster_path})`}}   >
       
       <div  className='bannerContent'>

         <h1 className='title'>{movie.title}</h1>
         <h3 className='overview'>{truncate(movie?.overview,200)}</h3>

       </div>
    </div>
  )
}

export default Banner