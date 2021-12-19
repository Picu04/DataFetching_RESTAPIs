import React from 'react'

const Movie = (props) => {
  return (
   
    <li>
        <h2>{props.id}</h2>
        <h2>{props.title}</h2>
        <h3>{props.release_date}</h3>
        <h2>{props.text}</h2>
    </li>
    
  
  )
}

export default Movie;
