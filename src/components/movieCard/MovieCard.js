import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import BackupImage from "../../assets/backup.png";

const MovieCard = ({ movie }) => {
  const { id, original_title, vote_average, poster_path } = movie;

  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : BackupImage;
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img className="movie-image" src={image} alt="MovieImage" />
      </Link>
      <div className="movie-details">
        <h2 className="movie-title">{original_title}</h2>
        <p className="movie-rating">{vote_average.toFixed(1)}</p>
      </div>
    </div>
  );
};

export default MovieCard;
