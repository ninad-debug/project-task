import "./style.css";
import Backup from "../../../assets/backup.png";

const CastCard = ({ name, character, profileImage }) => {
  const image = profileImage
    ? `https://image.tmdb.org/t/p/w500/${profileImage}`
    : Backup;

  return (
    <div className="cast-card">
      <img className="cast-image" src={image} alt="Profile" />
      <div className="cast-details">
        <h3 className="cast-name">{name}</h3>
        <p className="cast-character">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
