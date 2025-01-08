import { useEffect, useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./global.css";
import "../src/app.css"

const KEY = "64dfcd4b";
const API_URL = `https://www.omdbapi.com/?apikey=${KEY}`;

function App() {
    const [watchList, setWatchList] = useState(function () {
        const data = JSON.parse(localStorage.getItem("watchList"));
        if (data) return data;
        else return [];
    });
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [movieDetails, setMovieDetails] = useState();
    const [isLoadingMovies, setIsLoadingMovies] = useState(false);
    const [isLoadingMovieDetails, setIsMovieDetais] = useState(false);

    //derived state
    const resultCount = movies.length;
    const activeMovieID = movieDetails?.imdbID;


    localStorage.setItem("watchedMovieList", JSON.stringify(watchList));

    useEffect(
        function () {
            async function fetchMovies() {
                setIsLoadingMovies(true);
                setMovies([]);
                const response = await fetch(`${API_URL}&s=${query}`);
                const data = await response.json();

                setIsLoadingMovies(false);
                setMovies(data.Search || []);
            }

            if (query.length >= 3) fetchMovies();
            else {
                setMovies([]);
                setMovieDetails(null);
            }
        },
        [query]
    );

    useEffect(
        function () {
            localStorage.setItem("watchList", JSON.stringify(watchList));
        },
        [watchList]
    );

    function handleChangeSearchQuery(e) {
        setQuery(e.target.value);
    }

    async function handleMovieCardClick(imdbID) {
        setIsMovieDetais(true);
        // 1. Fetch movie details with imdbId
        if (movieDetails?.imdbID === imdbID) {
            setMovieDetails(null);
            return;
        }
        const response = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await response.json();
        setIsMovieDetais(false);
        // 2. Update movieDetail state
        setMovieDetails(data);
    }

    function handleCloseMovieDetails() {
        setMovieDetails(null);
    }

    function handleAddMovieToWatchList(movieDeatils, userRating) {
        const watchedMovie = {
            name: movieDeatils.Title,
            poster: movieDeatils.Poster,
            releaseDate: movieDeatils.Released,
            runtime: movieDeatils.Runtime,
            imdbRating: Number(movieDeatils.imdbRating),
            userRating: userRating,
            imdbID: movieDeatils.imdbID,
        };
        const index = watchList.findIndex(function (movie) {
            return movie.imdbID === movieDeatils.imdbID;
        });
        if (index != -1) {
            watchList[index] = watchedMovie;
            setWatchList(function (watchList) {
                return [...watchList];
            });
        } else {
            setWatchList(function (watchList) {
                return [...watchList, watchedMovie];
            });
        }
    }

    function handleRemoveMovieToWatchList(imdbID) {
        setWatchList(function (watchList) {
            watchList = watchList.filter(function (movie) {
                return movie.imdbID !== imdbID;
            });
            return [...watchList];
        });
    }

    return (
        <div className="main-container">
            <Nav
                handleChange={handleChangeSearchQuery}
                query={query}
                resultCount={resultCount}
            />
            <Main
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                movieDetails={movieDetails}
                activeMovieID={activeMovieID}
                handleCloseMovieDetails={handleCloseMovieDetails}
                isLoadingMovies={isLoadingMovies}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
                handleRemoveMovieToWatchList={handleRemoveMovieToWatchList}
            />
        </div>
    );
}

export default App;
