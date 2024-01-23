import React, { useEffect, useState } from "react";
import "./style.css";
import CastCard from "../castCard/CastCard";

const CastList = ({ id }) => {
  const [data, setData] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=c45a857c193f6302f2b5061c3b85e743&language=en-US}`;

  useEffect(() => {
    async function fetchCast() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.cast);
    }
    fetchCast();
  }, [url]);
  return (
    <div className="cast-list">
      {data &&
        data?.map((cast) => (
          <CastCard
            key={cast?.cast_id}
            name={cast?.name}
            character={cast?.character}
            profileImage={cast.profile_path}
          />
        ))}
    </div>
  );
};

export default CastList;
