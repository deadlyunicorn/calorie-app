'use client'

import { useEffect } from "react"

export default function Button(){
  
  useEffect(()=>{
    console.log("no you!")

    
  })

  return(
    <button
      onClick={
        ()=>{console.log('hello world')}
      }>
        Click Me!
    </button>
  )
}