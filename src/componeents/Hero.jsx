import { useSelector } from "react-redux";
import Loading from "./Loading";
import { imgUrl } from "../utils/constant";

const Hero = () => {
  const setHero = useSelector((store) => store.movieReducer);
  const i = Math.floor(Math.random() * setHero.popularMovies.length);
  const hero = setHero.popularMovies[i];

  return (
    <div>
      {setHero.isLoading && <Loading />}
      {!setHero.isLoading && (
        <div className="flex flex-col p-5 gap-2 my-3 sm:flex-row">
          <div className="text-white flex flex-col w-full sm:w-1/2">
            <h1 className="text-3xl text-orange-800 hover:opacity-70">{hero.title}</h1>
            <p className="text-md">{hero.overview}</p>
            <p className="text-yellow-700 py-2">TMDB: {hero.vote_average}</p>
            <div className="py-5 flex gap-5">
              <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded">
                Watch
              </button>
              <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
                Details
              </button>
            </div>
          </div>

          <div className="w- full sm:w-1/2 hover:opacity-80">
            <img src={imgUrl.concat(hero.backdrop_path)} alt="movie image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
