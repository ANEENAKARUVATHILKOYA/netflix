import {React, useEffect, useState} from 'react'
import './Navbar.css'

function Navbar() {
 
    const [Show, setshow]=useState(false)


    useEffect(()=>{
         window.addEventListener('scroll',()=>{
            if(window.scrollY>200){
                setshow(true)
            }
            else{
              setshow(false)   
            }
         })
    },[])

    console.log(Show);

  return (
    <div className={`nav ${Show &&  'navblack'}`}>
        <img  
          style={{width:'150px'}}
          src='https://i.postimg.cc/vTLtWGhs/images-1.jpg'
          />
    </div>
  )
}

export default Navbar