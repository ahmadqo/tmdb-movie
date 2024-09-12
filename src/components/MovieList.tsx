import { memo, useEffect, useState } from "react";
import MovieCard from "./ui/Card";
import { AppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import { formatDate } from "../utils/helpers";
import { Movie } from "../features/movies/types";
// import { useNavigate } from "react-router-dom";
import Pagination from "./ui/Pagination";

interface MovieListProps {
  endpoint: string;
  label: string;
  id: string;
  dataList: Movie[];
  blur: boolean;
  moreDisplay?: boolean;
}

const MovieList = ({
  endpoint,
  label,
  id,
  dataList,
  blur,
  moreDisplay = true,
}: MovieListProps) => {
  // const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const [page, setpage] = useState(1);

  useEffect(() => {
    if (endpoint !== "") {
      const query = `${endpoint}?page=${page}`;
      dispatch(fetchMovies(query));
    }
  }, [dispatch, endpoint, page]);

  // const handleClick = (id: number) => {
  //   navigate("/detail/" + id, {
  //     replace: true,
  //   });
  // };

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
              id={movie.id}
              title={movie.title}
              image={movie.poster_path}
              release_date={formatDate(movie.release_date)}
              // onClick={() => {
              //   handleClick(movie?.id);
              // }}
              blur={blur}
              vote_average={movie.vote_average}
            />
          ))}
        </div>
        {/* {moreDisplay && (
          <div className="flex justify-center items-center pt-10">
            <Button label="Show More" onClick={() => setpage(page + 1)} />
          </div>
        )} */}
        {moreDisplay && (
          <div className="flex justify-center">
            <Pagination
              page={page}
              totalPages={10}
              onPageChange={(val) => setpage(val)}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(MovieList);
