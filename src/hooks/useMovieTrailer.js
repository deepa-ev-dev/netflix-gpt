import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getMovieVideos = async () => {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        // Handle fetch errors here
        console.error("Error fetching movie trailers:", error);
      }
    };

    getMovieVideos();

    return () => {
      // Cleanup function to cancel any pending requests or unsubscribe
      // Not needed in this case because there's no cleanup required
    };
  }, [dispatch, movieId]);
};

export default useMovieTrailer;
