import React, {useState} from 'react'
import defaultImage from "../../assets/default_movie.png";
import Modal from "./Modal";
import axios from "axios";

const Movie = ({movie}) => {
    const poster = 
        movie.Poster === "N/A" ? defaultImage : movie.Poster;
    
    const [detailMovie , setDetailMovie] = useState({});

    const sendID = () => {
        const movieid = movie.imdbID;
        const urlApi = `http://www.omdbapi.com/?i=${movieid}&apikey=77e089d`;
        axios.get(urlApi)
        .then((response) => {
            if (Object.keys(response.data).length !== 0) {
                setDetailMovie({...response.data});
            }    
        })
    }

    return (        
        <div className="card movie" 
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
                onClick={sendID}
            >
                See Detail ... 
            </button>
            <Modal detail={detailMovie} />
        </div>
    )
}

export default Movie