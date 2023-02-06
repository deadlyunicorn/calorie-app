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


const Target={
  nutrients:{
    calories:"1850",
    carbs:"160",
    fat:"60",
    protein:"160",
  }
}

const Varience={
  nutrients:{
    calories:{
      high:"2000",
      low:"1700"
    },
    carbs:{
      high:"170",
      low:"150"
    },
    fat:{
      high:"70",
      low:"50"
    },
    protein:{
      high:"175",
      low:"145"
    },
  }
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
    <div className="min-h-[40px] bg-gradient-to-b from-purple-700 to-purple-800 text-white flex flex-col items-center p-2 gap-2 rounded-lg">
      <div className="border-b border-blue-600 ">
        <p>Compare your results</p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 gap-2   text-center rounded-xl text-white drop-shadow-2xl font-semibold">
          <div className="overflow-hidden rounded-xl ">
            <button className="w-full"><Link href="/">Yesterday</Link></button>
          </div>
          <div className=" overflow-hidden rounded-xl ">
            <button className="w-full bg-gradient-to-r from-green-400   to-blue-500"><Link href="/">Today</Link></button>
          </div>
          <div className=" overflow-hidden rounded-xl ">
            <button className="w-full"><Link href="/">Tomorrow</Link></button>
          </div>
        </div>
      </div>
    </div>




        <div className="flex flex-col text-center  pt-2 mt-2 bg-gradient-to-b from-purple-800 to-blue-800 rounded-lg text-white">

        <div className="flex flex-col">
          <div className="p-1">
            <p>Results</p>
          </div>
          
          <DisplayField inputRef={inputRef} label="calories"/>

          <DisplayField inputRef={inputRef} label="carbs"/>
          <DisplayField inputRef={inputRef} label="fat"/>
          <DisplayField inputRef={inputRef} label="protein"/>
          </div>
        </div>

        <div className="flex flex-col bg-gradient-to-b from-blue-800 to-purple-800 mt-2 text-center rounded-lg text-white">
          
          <div className="overflow-hidden py-2 flex flex-col items-center">
            <form
            onSubmit={(event)=>{
              event.preventDefault();//prevents page reload
              setRerender(!rerender);
            }}>

            <div>

            <p>[Results]</p>


            <InputField label="calories" handleChange={handleInputChange}/>
            
            <InputField label="carbs" handleChange={handleInputChange}/>
            
            <InputField label="fat" handleChange={handleInputChange}/>

            <InputField label="protein" handleChange={handleInputChange}/>
            </div>


            <br/>

            <div className="h-10 text-white">

              <button
                className="bg-gradient-to-br from-green-300 to-blue-400 mt-1 py-1 px-2 rounded-xl  border-t-2 border-purple-500 active:border-0 font-semibold">

                Click Me
              </button>
            </div>

          </form>
          
          </div>
        </div>
            
        <div className="text-center m-2 text-pink-400">How are results highlighted?</div>
        
        <div className="grid grid-cols-2 text-center   mt-2 bg-gradient-to-b from-purple-800 to-blue-900 rounded-lg text-white">
                
          {/*  */}
          <div className="flex flex-col border-r border-purple-500 ">
            <div className="pb-2 pt-2">
              <p>Target</p>
            </div>
            <TargetField label={"calories"} />
            <TargetField label={"carbs"} />
            <TargetField label={"fat"} />
            <TargetField label={"protein"} />
          </div>
          {/*  */}
          <div className="flex flex-col ">
            <div className="pb-2 pt-2">  
              <p>Varience</p>
            </div>
            <VarienceField label={"calories"}/>
            <VarienceField label={"carbs"}/>
            <VarienceField label={"fat"}/>
            <VarienceField label={"protein"}/>
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
    className="rounded-lg p-1 font-mono font-thin bg-gradient-to-b from-indigo-300 to-indigo-400 w-24"
    onChange={(e)=>{handleChange(e,label)}}
    type="number"
    max={+Varience.nutrients[label]["high"]*3}
    min="0"/>
    </>
    
  )
}

function DisplayField({inputRef,label}:{inputRef: React.MutableRefObject<Nutrients>,label:keyof NutrientKeys}){

    const resultEffectDisplay=()=>{

      if ((+inputRef.current.nutrients[label]<+Varience.nutrients[label]["low"])){
        return (
          <span className="text-yellow-400">
          {inputRef.current.nutrients[label]}
          </span>
        )
        }
      else if (+inputRef.current.nutrients[label]<+Varience.nutrients[label]["high"]){
        return (
          <span className="text-green-400">
          {inputRef.current.nutrients[label]}
          </span>
        )
      }
      else{
        return (
          <span className="text-red-400">
          {inputRef.current.nutrients[label]}
          </span>
        )
      }
    }

      return(
        <>
          <div className="overflow-hidden border-t border-purple-500 py-2 rounded-lg">
            <div className="h-12 text-lg ">
              <span className="text-white">[{label}] </span><br/> 
              {resultEffectDisplay()}

              
              
    
            </div>
          </div>
        </>
      )

}


function TargetField({label}:{label:keyof NutrientKeys}){
  return(
    <>
      <div className="overflow-hidden border-t border-purple-500 py-2">
        <div className="h-10">
          [{label}]<br/>
        <span className="text-green-400">~{Target.nutrients[label]}</span>
        </div>
      </div>
    </>
  )
}

function VarienceField({label}:{label:keyof NutrientKeys}){
  return(
    <>
      <div className="overflow-hidden border-t border-purple-500 py-2">
        <div className="h-10">
          [{label}]<br/>
          <span className="text-yellow-400">&lt;{Varience.nutrients[label]["low"]}</span>&nbsp;|&nbsp;<span className="text-red-400">&gt;{Varience.nutrients[label]["high"]}</span>
        </div>
      </div>    
    </>
  )
}