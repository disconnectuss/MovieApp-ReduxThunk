import axios from "axios";
import { useEffect, useState } from "react";
import { imgUrl, options } from "../utils/constant";
import Loading from "./Loading";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const MovieList = ({ genre }) => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    axios
      .get(
        `/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, []);
  console.log(movies);
  return (
    <div className="text-white p-5">
      {!movies && <Loading />}
      {movies && (
        <>
          <h1 className="text-xl mb-3">{genre.name}</h1>
          <Splide
            options={{
              autoWidth: true,
              gap: "10px",
              pagination: false,
            }}
            key={genre.id}
          >
            {movies?.map((movie) => (
              <SplideSlide key={movie.id} className="text-3xl">
                <Link to={`/movie/${movie.id}`}>
                  <img
                  className="movie max-w-[200px]"
                  src={imgUrl.concat(movie.poster_path)}
                />
                </Link>
              
              </SplideSlide>
            ))}
          </Splide>
        </>
      )}
    </div>
  );
};

export default MovieList;
