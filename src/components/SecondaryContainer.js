  import React from "react";
  import MovieList from "./MovieList";
  import { useSelector } from "react-redux";

  const SecondaryContainer = () => {
    const movies = useSelector((store)=> store.movies);
    
    return movies.nowPlayingMovies && movies?.popularMovies && (
      <div className="w-full md:w-screen bg-black">
        <div className="md:-mt-52 relative z-20 px-6 md:px-8">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Popular Movies"} movies={movies?.popularMovies}/>
        <MovieList title={"Horror Movies"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        </div>
      </div>
    );
  };

  export default SecondaryContainer;
