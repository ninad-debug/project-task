import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";
import CastList from "../cast/castList/CastList";

const MovieDetail = () => {
  const params = useParams();
  const [movie, setMovie] = useState({});
  const image = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    : "";

  useEffect(() => {
    async function fetchMovieDetails() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=c45a857c193f6302f2b5061c3b85e743`
      );
      const json = await response.json();
      setMovie(json);
    }
    fetchMovieDetails();
  }, [params.id]);

  return (
    <div className="movie-detail-page">
      <div className="movie-detail-container">
        <img className="movie-detail-image" src={image} alt="" />
        <div className="movie-detail-content">
          <h2 className="movie-detail-title">{movie?.title}</h2>
          <h4 className="movie-detail-rating">
            Rating:
            {movie?.vote_average?.toFixed(1)}
          </h4>
          <p className="movie-detail-genre">
            {movie?.genres
              ? movie?.genres.map((genre) => (
                  <span className="genre" key={genre.id}>
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
          <p className="movie-detail-description">
            Realease Date: {movie?.release_date}
          </p>
          <h3>Overview</h3>
          <p className="movie-detail-description">{movie.overview}</p>
        </div>
      </div>
      <CastList id={params.id} />
    </div>
  );
};

export default MovieDetail;
