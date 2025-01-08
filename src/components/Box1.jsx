import MovieList from "./MovieList";
import style from "../styles/Box1.module.css";
import Message from "./Message";
import Emoji from "./Emoji";
import Loader from "./Loader";

function Box1({
    movies,
    handleMovieCardClick,
    activeMovieID,
    isLoadingMovies,
}) {
    // 1. if isLoading true show Loader insted BOX1 ( NO )
    // 2. if isLoading true show Loader inside BOX1 ( YES )

    // 1.
    // if (isLoading) return <Loader />;

    return (
        <div className={style.box1}>
            {isLoadingMovies && <Loader />}

            {!isLoadingMovies && movies.length === 0 ? (
                <Message>
                    <Emoji txt="🚫" /> No Movie Found !
                </Message>
            ) : (
                <MovieList
                    movies={movies}
                    handleMovieCardClick={handleMovieCardClick}
                    activeMovieID={activeMovieID}
                />
            )}
        </div>
    );
}

export default Box1;
