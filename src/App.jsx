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
    x:500,
    rotation:360,
    borderRadius:'50%',
    scale:1.5,
    ease:'power2.out',
    scrollTrigger:{
      trigger:box,
      start:'bottom bottom',
      end:'top 30%',
      scrub:true
    },
    


  })
 });
 gsap.fromTo(".line1",{
  opacity:0
 },{
  opacity:1,
  scrollTrigger:{
    trigger:'.line1',
    start:'bottom bottom',
    end:'top 10%',
    scrub:true
  }
 });
 gsap.fromTo(".line2",{
    opacity:0,
    y:20

 },{
  opacity:1,
  y:0,
  delay:0.5,
  duration:0.5,
  scrollTrigger:{
    trigger:'.line2',
    start:'bottom bottom',
    end:'top 10%',
    scrub:true
  }
 })
  })

    



  return (
    <>
    <div className='text-center p-4 text-black font-mono text-2xl'><h1>GSAP ANIMATIONS</h1></div>
    <div className='min-h-screen bg-black'></div>
     <div ref={scrollRef}className="p-20 space-y-20">
        <div className='line1 bg-red-500 h-10 w-10 flex justify-center items-center text-white'>HII</div>
        <div className='line1 bg-orange-500 h-10 w-10 flex justify-center items-center text-white'>YO</div>
       
     </div>
      <div className='line2 font-mono p-10'>This section is part of a GSAP animation tutorial where we explore how scroll-based animations work in React. Using GSAP and ScrollTrigger, elements smoothly animate as they enter the viewport, helping you understand transforms, easing, and scrub behavior in a practical way.</div>
     <div className='min-h-screen bg-black'>

     </div>
    </>
  )
}

export default App
