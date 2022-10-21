// import { Card } from "react-bootstrap";


function MovieCard({movie}){
      return (
        <div>


  <div class='carte'>
    <img src={movie.posterurl} alt="mov"/>
    <br></br><br></br>
    <h2>{movie.name}</h2>
    <p>{movie.description}</p>
  </div>
        </div>
      ) 
    }
export default MovieCard