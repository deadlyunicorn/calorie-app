'use client'
import { MongoClient } from 'mongodb'

import { useEffect,useState } from "react"


const uri = "mongodb+srv://deadlyunicorn:QSNRXAKMIHyzMxmW@testingcluster01.spy4wzn.mongodb.net/?retryWrites=true&w=majority";



export default function Button(){
  
  const [movies,setMovies]=useState([]);

  useEffect(()=>{
    async function fetchMovies(){
      
      const client = await MongoClient.connect(uri, { useNewUrlParser: true });
      const db = client.db("deadly_testing");
      const movieData = await db.collection("movies").find({}).toArray();
      setMovies(movieData);
      client.close()
    }
    fetchMovies();
    
  },[])

  return(
    <>
      <button
        onClick={
          ()=>{console.log('hello world')}
        }>
          Click Me!
      </button>
        
      <ul>
        {
          movies.map(movie=>(<li key={movie._id}>{movie.title} ({movie.year})</li>))
        }

      </ul>
    </>
  )
}