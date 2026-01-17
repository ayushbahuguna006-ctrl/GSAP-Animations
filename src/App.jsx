import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/all'
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


function App() {
  const scrollRef=useRef();
  useGSAP(()=>{
    const boxes=gsap.utils.toArray(scrollRef.current.children);
     boxes.forEach(box => {
  gsap.to(box,{
    x:1000,
    rotation:360,
    duration:2,
    borderRadius:'50%',
    scale:1.5,
    ease:'power1.inOut',
    scrollTrigger:{
      trigger:box,
      start:'bottom bottom',
      end:'top 10%',
      scrub:true
    },
    


  })
 });
  })

    



  return (
    <>
    <div className='min-h-screen bg-black'></div>
     <div ref={scrollRef}className="p-20 space-y-20">
        <div className='bg-red-500 h-10 w-10'></div>
        <div className='bg-orange-500 h-10 w-10'></div>

     </div>
     <div className='min-h-screen bg-black'>

     </div>
    </>
  )
}

export default App
