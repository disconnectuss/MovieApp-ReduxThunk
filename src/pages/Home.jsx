import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies } from "../redux/actions/movieActions";
import Hero from "../componeents/Hero";
import MovieList from "../componeents/MovieList";

const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store.movieReducer);
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
  }, []);
  return (
    <div>
      <Hero />
      {state.genres.map((genre) => (
        <MovieList key={genre.id} genre={genre} />
      ))}
    </div>
  );
};

export default Home;
