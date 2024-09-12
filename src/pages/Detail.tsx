import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroDetail from "../components/HeroDetail";
import Navbar from "../components/ui/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { useEffect } from "react";
import { fetchMovies } from "../features/movies/moviesSlice";
import { formatDate, formattedRevenue } from "../utils/helpers";

const Detail = () => {
  const { id } = useParams();
  const dispatch: AppDispatch = useDispatch();
  const { detail } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id) {
      dispatch(fetchMovies(`/movie/${id}`));
    }
  }, [dispatch, id]);

  return (
    <div className="relative bg-zinc-950">
      <Navbar />
      <HeroDetail
        bgImage={detail?.backdrop_path || ""}
        posterImage={detail?.poster_path || ""}
      />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-80 bg-neutral-950 rounded-3xl flex justify-between p-10">
        <div className="text-white font-bold text-lg flex items-center gap-2">
          {Number(detail?.vote_average).toFixed(1)}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            className="w-5 h-5 text-orange-500"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="text-white font-bold text-lg flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {Number(detail?.popularity).toFixed(0)}
        </div>
      </div>

      <section
        id="detail"
        className="flex items-center justify-center py-8 bg-zinc-950 px-8 xl:px-[160px] pt-20"
      >
        <div className="flex flex-col max-w-2xl text-center">
          <div className="text-white text-5xl font-bold">
            <div className="mb-2">{detail?.title}</div>
          </div>
          <p className="text-white text-base transition-all duration-300 ease-in-out mt-10">
            {detail?.overview}
          </p>
          <div className="flex columns-3 gap-10 text-white justify-center mt-14">
            <div className="flex flex-col items-center">
              <p className="font-bold mb-2">Release Data</p>
              <p>{formatDate(detail?.release_date)}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold mb-2">Original Title</p>
              <p>{detail?.original_title}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold mb-2">Revenue</p>
              <p>{formattedRevenue(detail?.revenue || 0)}</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
export default Detail;
