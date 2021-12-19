
import React from "react";
import Movie from './Movie'

const MovieList=(props)=>{

    return(
        <div>
            <ul>
      {
         props.movies.map((ele)=>{
             return(
                 <div key={ele.episode_id}>
                   <Movie 
                 
                   title={ele.title}
                   text={ele.opening_crawl}
                   release_date={ele.release_date}

                   />
                </div>
             )
         })
      }
      </ul>
        </div>
    )
}

export default MovieList;