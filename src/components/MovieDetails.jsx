import styles from "../styles/MovieDetails.module.css";
import Emoji from "./Emoji";
import StarRating from "./StarRating";
import {formatMormateMovieLength} from "../helper"
function MovieDetails({ movieDetails,handleCloseMovieDetails,handleAddMovieToWatchList }) {
    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        imdbRating,
        Plot: plot,
        Released: released,
        Actors: actors,
        Director: director,
        Genre: genre,
    } = movieDetails;
function handleAction(userRating){
    handleAddMovieToWatchList(movieDetails,userRating);
}
    return (
        <div className={styles.movieDetails}>
            <button onClick={handleCloseMovieDetails} className={styles.closeMovie}>
                <Emoji txt="❌" />
            </button>
            <div className={styles.details}>
                <img src={poster} alt={title} />
                <div>
                    <h3>{title}</h3>
                    <p>
                        {released} • {formatMormateMovieLength(runtime)} {genre}
                    </p>
                    <p>
                        <Emoji txt="🍅" /> {imdbRating} Tomatos
                    </p>
                </div>
            </div>
                <StarRating color="#fc2403" size={10} defaultRating={0} action={handleAction}/>
            <div className={styles.description}>
                <p>
                    <strong>PLOT : </strong>
                    {plot}
                </p>
                <p>
                    <strong>Starring by : </strong>
                    {actors}
                </p>
                <p>
                    <strong>Directed by : </strong>
                    {director}
                </p>
            </div>
        </div>
    );
}

export default MovieDetails;
