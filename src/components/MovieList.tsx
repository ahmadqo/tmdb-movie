import MovieCard from "./ui/Card";
import Button from "./ui/Button";
import { AppDispatch, RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchMovies } from "../features/movies/moviesSlice";
import { formatDate } from "../utils/helpers";

interface MovieListProps {
  endpoint: string;
  label: string;
  id: string;
}

const MovieList = ({ endpoint, label, id }: MovieListProps) => {
  const dispatch: AppDispatch = useDispatch();
  const { status, error, popular, nowPlaying, topRated, upcoming, allMovies } =
    useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies(endpoint));
  }, [dispatch, endpoint]);

  if (status === "loading") return <div>Loading</div>;
  if (status === "failed") return <p>{error}</p>;

  let dataList = [];
  if (endpoint.includes("popular")) {
    dataList = popular;
  } else if (endpoint.includes("now_playing")) {
    dataList = nowPlaying;
  } else if (endpoint.includes("top_rated")) {
    dataList = topRated;
  } else if (endpoint.includes("upcoming")) {
    dataList = upcoming;
  } else {
    dataList = allMovies;
  }

  return (
    <section
      id={id}
      className="flex items-center justify-center py-8 bg-zinc-950 px-8 xl:px-[160px]"
    >
      <div className="w-full max-w-screen-xl">
        <div className="text-white text-2xl font-bold">
          <div className="mb-2">{label}</div>
          <div className="w-24 h-1 bg-red-500 rounded-full"></div>
        </div>
        <div className="pb-8 pt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-[3rem]">
          {(dataList ?? []).map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={movie.poster_path}
              release_date={formatDate(movie.release_date)}
            />
          ))}
        </div>
        <div className="flex justify-center items-center pt-10">
          <Button label="Show More" />
        </div>
      </div>
    </section>
  );
};

export default MovieList;
