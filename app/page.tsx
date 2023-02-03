'use client'

import Link from "next/link"
import React, { useEffect,useRef,useState } from "react"


export default function Home() {



  const inputRef = useRef({
    calories:"",
    carbs:"",
    fat:"",
    protein:"",
  });
  const [rerender,setRerender]=useState(true);

  useEffect(()=>{
    console.log("rendered")
  },[rerender])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,whichInput:string) =>{
      if (whichInput=="calories"){
        inputRef.current.calories = e.target.value
      }
      else if (whichInput=="carbs"){
        inputRef.current.carbs = e.target.value
      }
      else if (whichInput=="fat"){
        inputRef.current.fat = e.target.value
      }
      else if (whichInput=="protein"){
        inputRef.current.protein = e.target.value
      }
    }





  return (
    <>
    <div className="min-h-[40px] bg-green-100 flex flex-col items-center p-2 gap-2">
      <div className="border-b border-black ">
        <p>Here we display your last [thing to add]</p>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-3 gap-2 border-red-200 border text-center ">
          <div className="border-r overflow-hidden">
            <button className="w-full"><Link href="/">Yesterday</Link></button>
          </div>
          <div className="overflow-hidden">
            <button className="w-full"><Link href="/">Today</Link></button>
          </div>
          <div className="border-l overflow-hidden">
            <button className="w-full"><Link href="/">Tomorrow</Link></button>
          </div>
        </div>
      </div>
    </div>


        <div className="grid grid-rows-4 text-center  pt-2 mt-2 bg-green-100 rounded-lg border">
          <div>
            <p>[Average]</p>
          </div>
          <div className="overflow-hidden border-t border-black py-2">
            <div className="h-10">
            [Calories] <br/>

            {inputRef.current.calories}
            </div>
          </div>
          <div className="overflow-hidden border-t border-black py-2">
            <div className="h-10">
            
            [Carbs] <br/>
            {inputRef.current.carbs}
            </div>
          </div>
          <div className="overflow-hidden border-t border-black py-2">
            <div className="h-10">
            
            [Fat] <br/>
            {inputRef.current.fat}
            </div>
          </div>
          <div className="overflow-hidden border-t border-black py-2">
            <div className="h-10">
            
            [Protein] <br/>
            {inputRef.current.protein}
            </div>
          </div>  
        </div>

        <div className="grid grid-rows-3 bg-green-100 mt-2 text-center">
          <div className="overflow-hidden  border-t border-black py-2 flex flex-col items-center">
            <div>

            <p>[Results]</p>

            <InputField label="calories" handleChange={handleInputChange}/>
            
            <InputField label="carbs" handleChange={handleInputChange}/>
            
            <InputField label="fat" handleChange={handleInputChange}/>

            <InputField label="protein" handleChange={handleInputChange}/>

            </div>


            <br/>

            <div className="h-10 ">

              <button
                className="bg-white mt-1 p-1 rounded-lg border-l-2 border-t border-black active:border-0"
                onClick={()=>{
                  setRerender(!rerender);
                  }}>
                Click Me
              </button>
            </div>

          
          </div>
          <div className="overflow-hidden  border-t border-black py-2">
            [Target]
          </div>
          <div className="overflow-hidden  border-t border-black py-2">
            [Variance]
          </div>
        </div>
    
    </>

  )
}


function InputField({label,handleChange}:{label:string, handleChange:(e:React.ChangeEvent<HTMLInputElement>, label:string) => void}){
  return(
    <>
    <p>{label}</p>
    <input
    onChange={(e)=>{handleChange(e,label)}}
    type="number"/>
    </>
    
  )
}
