'use client'

import Link from "next/link"
import React, { useEffect,useRef,useState } from "react"



interface NutrientKeys{
  'calories':string;
  'carbs':string;
  'fat':string;
  'protein':string;
} 

interface Nutrients{
  nutrients:{
    calories:string,
    carbs:string,
    fat:string,
    protein:string,
},
}

export default function Home() {





  const inputRef:React.MutableRefObject<Nutrients> = useRef({
    nutrients:{
      calories:"",
      carbs:"",
      fat:"",
      protein:"",
  },
  });

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,label:keyof NutrientKeys) =>{
    inputRef.current.nutrients[label] = e.target.value;
  }


  const [rerender,setRerender]=useState(true);
  
  useEffect(()=>{
    console.log("rendered")
  },[rerender])





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


        <div className="grid grid-cols-3 text-center  pt-2 mt-2 bg-green-100 rounded-lg border">
          <div className="border-4 grid grid-rows-4">
            <p>Results</p>
          <DisplayField inputRef={inputRef} label="calories"/>

          <DisplayField inputRef={inputRef} label="carbs"/>
          <DisplayField inputRef={inputRef} label="fat"/>
          <DisplayField inputRef={inputRef} label="protein"/>
          </div>

          <div className="border-4 grid grid-rows-4">
            <p>Target</p>
          <DisplayField inputRef={inputRef} label="calories"/>

          <DisplayField inputRef={inputRef} label="carbs"/>
          <DisplayField inputRef={inputRef} label="fat"/>
          <DisplayField inputRef={inputRef} label="protein"/>
          </div>

          <div className="border-4 grid grid-rows-4">
            <p>Varience</p>
          <DisplayField inputRef={inputRef} label="calories"/>

          <DisplayField inputRef={inputRef} label="carbs"/>
          <DisplayField inputRef={inputRef} label="fat"/>
          <DisplayField inputRef={inputRef} label="protein"/>
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


function InputField({label,handleChange}:{label:keyof NutrientKeys, handleChange:(e:React.ChangeEvent<HTMLInputElement>, label:keyof NutrientKeys) => void}){
  return(
    <>
    <p>{label}</p>
    <input
    onChange={(e)=>{handleChange(e,label)}}
    type="number"/>
    </>
    
  )
}

function DisplayField({inputRef,label}:{inputRef: React.MutableRefObject<Nutrients>,label:keyof NutrientKeys}){
  return(
    <>
      <div className="overflow-hidden border-t border-black py-2">
        <div className="h-10">
          [{label}]<br/>
          {inputRef.current.nutrients[label]}
        </div>
      </div>
    </>
  )
}
