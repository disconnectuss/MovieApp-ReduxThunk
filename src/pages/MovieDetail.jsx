import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { imgUrl, options } from "../utils/constant";
import axios from "axios";
import Loading from "../componeents/Loading";

const MovieDetail = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [review, setReview] = useState();

  useEffect(() => {
    axios.get(`movie/${movieId}`, options).then((res) => setMovie(res.data));
    axios
      .get(`movie/${movieId}/reviews`, options)
      .then((res) => setReview(res.data));
  }, [movieId]);
  console.log(movie);
  console.log(review);

  return (
    <div className="flex md:flex-col text-white">
      <div className="text-white flex justify-content items-center p-5 gap-5 m-3">
        {!movie ? (
          <Loading />
        ) : (
          <>
            <div className="w-2/6 hover:opacity-70">
              {/* <ReactPlayer url={} /> */}
              <img src={imgUrl.concat(movie.poster_path)} alt="" />
            </div>
            <div className="w-4/6 gap-5">
              <h1 className="text-3xl text-orange-800 ">{movie.title}</h1>
              <p className="mb-5">{movie.overview}</p>
              <p className="view text-sm text-yellow-600 mb-3">
                View: {movie.popularity}
              </p>
              <p className="rating text-sm text-yellow-600 mb-3">
                Rating: {movie.vote_count}
              </p>
              <p className="status text-sm text-yellow-600 mb-3">
                Rating: {movie.status}
              </p>
              <div className="mb-5 gap-5">
                <p className="status text-sm text-yellow-600">Languages: </p>
                <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                  {movie.original_language}
                </span>
              </div>
              <div className="mb-5 gap-10">
                <p className="status text-sm text-yellow-600">Categories: </p>
                {movie.genres.map((genre) => (
                  <span className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 mr-3 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <h1 className="text-red-500">Review</h1>
        {!review ? (
          <h1 className="text-white">No comment has benn done yet..</h1>
        ) : (
          review.results.map((item, index) => (
            <div key={index}>
              <h1 className="author text-md text-blue-500 mb-3">
                {item.author}
              </h1>
              <p className="comment text-sm mb-5">
                {item.content.slice(0, 200)}..
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MovieDetail;
