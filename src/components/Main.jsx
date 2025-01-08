import Box1 from "./Box1";
import Box2 from "./Box2";
import styles from "../styles/Main.module.css";

function Main({
    movies,
    handleMovieCardClick,
    movieDetails,
    activeMovieID,
    handleCloseMovieDetails,
    isLoadingMovies,
    isLoadingMovieDetails,
    handleAddMovieToWatchList,
    watchList,
    handleRemoveMovieToWatchList,
}) {
    return (
        <main className={styles.main}>
            <Box1
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                activeMovieID={activeMovieID}
                isLoadingMovies={isLoadingMovies}
            />
            <Box2
                movieDetails={movieDetails}
                handleCloseMovieDetails={handleCloseMovieDetails}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
                handleRemoveMovieToWatchList={handleRemoveMovieToWatchList}
            />
        </main>
    );
}

export default Main;
