import React, { useState } from "react";
import MovieList from './components/MovieList'
// const Dummymovies=[
//     {id:'a1',title:'3 Idiots',text:'lorem5'},
//       {id:'q1',title:'10 Idiots',text:'lorem1215'}
// ]

//https://swapi.dev/api/films


const App=()=>{
    const [movies,setMovies]=useState([])
    const[isLoading,setIsLoading]=useState(false)
    console.log("i am App")

    //fetch API

//     const fetchMovieDataHandler=()=>{
//         fetch('https://swapi.dev/api/films')
//         .then((response)=>{
//             return response.json()
//         })
//         .then((data)=>{
            

//             const transformedMovies=data.results.map((ele)=>{
//                 return(
//                     {
//                        id:ele.episode_id,
//                        title:ele.title,
//                        text:ele.opening_crawl,
//                        release_date:ele.release_date
//                     }
//                 )
               
//             })
// console.log(transformedMovies)
//             return setMovies(transformedMovies)
            
//         })

//using Async Await

    const fetchMovieDataHandler=async ()=>{
        setIsLoading(true)
        console.log("setting as true")
        const response=await fetch('https://swapi.dev/api/films')
        const data= await response.json()
            
         const transformedMovies=data.results.map((ele)=>{
                return(
                    {
                       id:ele.episode_id,
                       title:ele.title,
                       text:ele.opening_crawl,
                       release_date:ele.release_date
                    }
                )
               
            })
          console.log(transformedMovies)
          setMovies(transformedMovies)
          setIsLoading(false)
          console.log('dataget1')
          console.log(Boolean(isLoading))
        }

       

    return(
        <>
        <section>
        <button onClick={fetchMovieDataHandler}> Fetch Movies</button>
        </section>
        {console.log('dataget2')}
         {console.log(Boolean(isLoading))}
        {isLoading && <p>Loading...</p>}
        {!isLoading && <section>  <MovieList movies={movies}/></section>}
        {console.log(Boolean(isLoading))}
        {console.log('dataget3')}
        </>
    )
}

export default App;
