import React , {useState} from 'react'
import Search from "./Search";
import axios from "axios";
import Movie from "./Movie";
import "./Home.css";

const Home = () => {
    const [loading , setLoading] = useState(true);
    const [movies , setMovies] = useState([]);
    const [errorMessage , setMessage] = useState(null);

    const handleSearch = (newValue) => {
        setLoading(true);
        setMessage(null);

        axios.get(`http://www.omdbapi.com/?s=${newValue}&apikey=77e089d`)
        .then((response) => {
            if (response.data.Response === "True") {
                setMovies(response.data.Search)
                setLoading(false);
            } else {
                setMessage(response.data.Error);
                setLoading(false);
            }
        })
    }

    return (
        <div className="home container">
            <div className="header">
                <h1>Movie Rating</h1>
                <span>Seach Movie</span>
                <Search search={(valueFromChild) => handleSearch(valueFromChild)} />
            </div>
            <div className="movies">
                {
                    loading && !errorMessage ? 
                    (
                        <span>loading...</span>
                    ) : errorMessage ? 
                    (
                        <div className="errorMessage" style={{
                            color: "red",
                            fontSize: "20px",
                            fontWeight: "bold"
                        }}>{errorMessage}</div>
                    ) : 
                    (
                        movies.map((movie, index) => (
                            <Movie key={`${index}-${movie.Title}`} movie={movie} />
                        ))
                    )}
            </div>
        </div>
    )
}

export default Home
