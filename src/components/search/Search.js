import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../movieCard/MovieCard";
import Pagination from "../pagination/Pagination";

const Search = ({ apiPath }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");

  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=c45a857c193f6302f2b5061c3b85e743&query=${queryTerm}&page=${currentPage}`;

  const onPrevPage = () => {
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const onNextPage = () => {
    setCurrentPage((currentPage) => currentPage + 1);
  };

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    }
    fetchMovies();
    window.scrollTo(0, 0);
  }, [url]);

  return (
    <div className="search-results-page">
      <p>
        {data?.length === 0
          ? `No result found for ${queryTerm}`
          : `Results for '${queryTerm}'`}
      </p>
      <div className="body">
        <div className="movies-container">
          {data?.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          onPrevPage={onPrevPage}
          onNextPage={onNextPage}
        />
      </div>
    </div>
  );
};

export default Search;
