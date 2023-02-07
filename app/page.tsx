'use client'

import Link from "next/link"
import React, { useEffect,useRef,useState } from "react"


interface NutrientKeys{
  "calories":string;
  "carbs":string;
  "fat":string;
  "protein":string;
} 


const data={
    nutrients:{
      calories:{
        label:"Calories",
        target:1850,
        variant:150,
        result:null,
        high:2000,
        low:1700,

      },
      carbs:{
        label:"Carbs",
        target:160,
        variant:10,
        result:null,
        high:170,
        low:150,


      },
      fat:{
        label:"Fat",
        target:60,
        variant:10,
        result:null,
        high:70,
        low:50,

      },
      protein:{
        label:"Protein",
        target:160,
        variant:15,
        result:null,
        high:175,
        low:145,

      }
    }
}




interface Nutrients{
  nutrients: {
      calories: {
          label: string;
          target: number;
          variant: number;
          result: number|null;
          high: number;
          low: number;
      };
      carbs: {
          label: string;
          target: number;
          variant: number;
          result: number|null;
          high: number;
          low: number;
      };
      fat: {
        label: string;
        target: number;
        variant: number;
        result: number|null;
        high: number;
        low: number;
      };
      protein: {
        label: string;
        target: number;
        variant: number;
        result: number|null;
        high: number;
        low: number;
      };
  };
}

export default function Home() {


const inputRef:React.MutableRefObject<Nutrients> = useRef(data);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>,nutriKey:keyof NutrientKeys) =>{
    inputRef.current.nutrients[nutriKey].result = +e.target.value; //convert to number type
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
          <ResultField inputRef={inputRef} nutriKey="calories"/>
          <ResultField inputRef={inputRef} nutriKey="carbs"/>
          <ResultField inputRef={inputRef} nutriKey="fat"/>
          <ResultField inputRef={inputRef} nutriKey="protein"/>
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
              <p>Submit your results</p>
              <InputField nutriKey="calories" handleChange={handleInputChange}/>
              <InputField nutriKey="carbs" handleChange={handleInputChange}/>
              <InputField nutriKey="fat" handleChange={handleInputChange}/>
              <InputField nutriKey="protein" handleChange={handleInputChange}/>
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
          
      <div className="text-center m-2 text-pink-400">
        <span>
          How are results highlighted?
        </span>
      </div>
      
      <div className="grid grid-cols-2 text-center mt-2 bg-gradient-to-b from-purple-800 to-blue-900 rounded-lg text-white">
        {/*  */}
        <div className="flex flex-col border-r border-purple-500 ">
          
          <div className="pb-2 pt-2">
            <p>Target</p>
          </div>
          
          <div>
            <TargetField nutriKey={"calories"} />
            <TargetField nutriKey={"carbs"} />
            <TargetField nutriKey={"fat"} />
            <TargetField nutriKey={"protein"} />
          </div>
          
        </div>
        {/*  */}
        <div className="flex flex-col ">
        
          <div className="pb-2 pt-2">  
            <p>Varience</p>
          </div>
          
          <div>
            <VarienceField nutriKey={"calories"}/>
            <VarienceField nutriKey={"carbs"}/>
            <VarienceField nutriKey={"fat"}/>
            <VarienceField nutriKey={"protein"}/>
          </div>

        </div>
      {/*  */}
      </div>
    </>

  )
}


function InputField({nutriKey,handleChange}:{nutriKey:keyof NutrientKeys, handleChange:(e:React.ChangeEvent<HTMLInputElement>, label:keyof NutrientKeys) => void}){
  return(
    <>
      <div>
        <p>
          {data.nutrients[nutriKey].label}
        </p>
      </div>

      <div>
        <input
          className="rounded-lg p-1 font-mono font-thin bg-gradient-to-b from-indigo-300 to-indigo-400 w-24"
          onChange={(e)=>{handleChange(e,nutriKey)}}
          type="number"
          max={data.nutrients[nutriKey]["target"]*3}
          min={0}
        />
      </div>
    </>
  )
}

function ResultField({inputRef,nutriKey}:{inputRef: React.MutableRefObject<Nutrients>,nutriKey:keyof NutrientKeys}){

  const resultEffectDisplay=()=>{

    if (inputRef.current.nutrients[nutriKey].result!==null){
      if ((inputRef.current.nutrients[nutriKey].result!<data.nutrients[nutriKey].target-data.nutrients[nutriKey]["low"])){
        return (
          <span className="text-yellow-400">
            {[inputRef.current.nutrients[nutriKey].result].toString()}
          </span>
        )
      }
      else if (inputRef.current.nutrients[nutriKey].result!<data.nutrients[nutriKey]["high"]){
        return (
          <span className="text-green-400">
            {[inputRef.current.nutrients[nutriKey].result].toString()}
          </span>
        )
      }
      else{
        return (
          <span className="text-red-400">
            {[inputRef.current.nutrients[nutriKey].result].toString()}
          </span>
        )
      }
    }
  }

    return(
      <>
        <div className="overflow-hidden border-t border-purple-500 py-2 rounded-lg">
          <div className="h-12 text-lg ">
            <span className="text-white">{data.nutrients[nutriKey].label}</span><br/> 
            {resultEffectDisplay()}
          </div>
        </div>
      </>
    )

}


function TargetField({nutriKey}:{nutriKey:keyof NutrientKeys}){
  return(
    <>
      <div className="overflow-hidden border-t border-purple-500 py-2">
        <div className="h-10">
          {data.nutrients[nutriKey].label}
          <br/>
          <span className="text-green-400">
            ~{data.nutrients[nutriKey].target}
          </span>
        </div>
      </div>
    </>
  )
}

function VarienceField({nutriKey}:{nutriKey:keyof NutrientKeys}){
  return(
    <>
      <div className="overflow-hidden border-t border-purple-500 py-2">
        <div className="h-10">
          {data.nutrients[nutriKey].label}
          <br/>
          <span className="text-yellow-400">
            &lt;{data.nutrients[nutriKey].low}
          </span>
          &nbsp;|&nbsp;
          <span className="text-red-400">
            &gt;{data.nutrients[nutriKey].high}
          </span>
        </div>
      </div>    
    </>
  )
}