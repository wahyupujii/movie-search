import React, {useState} from 'react'
import defaultImage from "../../assets/default_movie.png";
import Modal from "./Modal";
import axios from "axios";

const Movie = ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? defaultImage : movie.Poster;
        
    const [detailMovie , setDetailMovie] = useState([]);
        
    const movieID = movie.imdbID;

    const detailMovieFunc = (movieid) => {
        axios.get(`http://www.omdbapi.com/?i=${movieid}&apikey=${process.env.REACT_APP_YOUR_API_KEY}`)
        .then((response) => {
            setDetailMovie({
                title: response.data.Title,
                actors: response.data.Actors,
                ratings: response.data.imdbRating,
                plot: response.data.Plot
            })
        })
    }

    return (        
        <div 
            className="card movie"
            id={movie.imdbID} 
            style={{
                width: "18rem",
                display: 'flex',
                alignItems: "center"
            }}
        >
            <img src={poster} className="card-img-top" alt="movie poster" />
            <div className="card-body">
                <h6 className="card-text">{movie.Title}</h6>
                <h6 className="card-text">{movie.Year}</h6>
            </div>
            <button 
                type="button"
                className="btn btn-primary" 
                data-bs-toggle="modal" 
                data-bs-target="#exampleModal"
                style={{
                    width: "50%",
                    margin: "10px 0px 20px 0px"
                }}
                onClick={() => {
                    detailMovieFunc(movieID)
                }}
            >
                See Detail ... 
            </button>
            <Modal detail={detailMovie} />
        </div>
    )
}

export default Movie