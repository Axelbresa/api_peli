import React, { useEffect, useState } from 'react'
import movie from "./movie.json"
import { get } from '../utils/httpClient';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import styles from "../css/MovieCard.module.css"


function MovieDetail() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        get("/movie/" + movieId).then((data) => {
            setMovie(data);
        });
    }, [movieId]);

    if (!movie) {
        return null;
    }


    const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <div className={styles.detailsContainer}>
            MovieDetail
            <img className={`${styles.col} ${styles.movieImage}`}
                src={imageUrl} alt={movie.title} />
            <div className={`${styles.col} ${styles.MovieDetail}`}>
                <p className={styles.firstItem}><strong> Title: </strong>{movie.title}</p>
                <p> <strong>Genres:</strong>
                    {movie.genres.map(genre => genre.name).join(", ")}
                </p>
                <p><strong> Descripcion: </strong>{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieDetail