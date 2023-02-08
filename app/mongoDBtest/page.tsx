import { MongoClient } from 'mongodb'

import Button from "./button"

const uri = "mongodb+srv://deadlyunicorn:y3mBrFNi9ooruT5I@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);


const db = client.db("deadly_testing");
const movies = db.collection("movies")

async function run(){
  try {
    const query = { title: 'Titanic'};
    const movie = await movies.findOne(query);

    return(movie);

  }finally{
    await client.close
  }
}



export default function WebApp(){


  const getMovie = () =>{
    run().catch(console.dir)
    .then(result=>result!.json())
    .then(result2=>{return (<div>{result2}</div>)})
    .catch(error=><div>{JSON.stringify(error)}</div>)
  }

  

  return(
    <div>
      <p>hello world!</p>
      <p>Here is a button!</p>
      <p>{"hi"}</p>
      <p>oh</p>
      
      <div className="bg-white rounded-lg w-fit p-1 border-black">
        <Button/>
      </div>
    </div>
  )
}
