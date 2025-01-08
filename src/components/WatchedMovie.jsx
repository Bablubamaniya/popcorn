import styles from "../styles/WatchedMovie.module.css";
import Emoji from "./Emoji";
import { formatMormateMovieLength } from "../helper";

function WatchedMovie({
    image,
    name,
    imdbRating,
    userRating,
    length,
    handleRemoveMovieToWatchList,
    imdbID,
}) {
    return (
        <div className={styles.movie}>
            <div className={styles.imageBox}>
                <button onClick={() => handleRemoveMovieToWatchList(imdbID)}>
                    <Emoji txt="❌" />
                </button>
                <img src={image} alt={name} />
            </div>
            <div className={styles.detailsBox}>
                <h4>{name}</h4>
                <div>
                    <span>
                        <Emoji txt="🍅" />
                        <p>{Number(imdbRating)}</p>
                    </span>
                    <span>
                        <Emoji txt="⭐️" />
                        <p>{Number(userRating)}</p>
                    </span>
                    <span>
                        <Emoji txt="🕗" />
                        <p>{formatMormateMovieLength(length)}</p>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default WatchedMovie;
