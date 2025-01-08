// import { useRef } from "react";
import styles from "../styles/Search.module.css";

function Search({ query, handleChange }) {

    return (
        <form className={styles.search}>
            <input type="text" onChange={handleChange} value={query} autoFocus/>
            <button>Search</button>
        </form>
    );
}

export default Search;
