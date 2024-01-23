import { Routes, Route } from "react-router-dom";
import Body from "../components/Body/Body";
import MovieDetail from "../components/movieDetail/MovieDetail";
import Error from "../components/error/Error";
import Search from "../components/search/Search";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Body apiPath="popular" />} />
      <Route path="movie/:id" element={<MovieDetail />} />
      <Route path="/movies/popular" element={<Body apiPath="popular" />} />
      <Route path="/movies/top" element={<Body apiPath="top_rated" />} />
      <Route path="/movies/upcoming" element={<Body apiPath="upcoming" />} />
      <Route path="search" element={<Search apiPath="search/movie" />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
