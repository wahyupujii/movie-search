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
        axios.get(`http://www.omdbapi.com/?s=${newValue}&apikey=${process.env.REACT_APP_YOUR_API_KEY}`)
        .then((response) => {
            if (response.data.Response === "True") {
                const movieArr = response.data.Search;
                let movie = movieArr.filter(e => e.Type !== "game" && e.Type !== "comics");
                setMovies(movie)
                setLoading(false);
                setMessage(null);
            } else {
                setMessage(response.data.Error);
                setLoading(false);
            }
        })
    }
    return (
        <div className="home container">
            <div className="header">
                <h1>Movie Search</h1>
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
