import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Navbar from "../components/ui/Navbar";
import { AppDispatch, RootState } from "../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../features/movies/moviesSlice";

enum Filter {
  Idle = "",
  Popular = "popular",
  Now = "now_playing",
  Top = "top_rated",
  Upcoming = "upcoming",
}

enum Label {
  popular = "Popular Movies",
  now_playing = "Now Playing Movies",
  top_rated = "Top Rated Movies",
  upcoming = "Upcoming Movies",
}

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const {
    loadingTrending,
    loadingUpComing,
    topRated,
    upcoming,
    popular,
    nowPlaying,
    searchMovies,
  } = useSelector((state: RootState) => state.movies);

  const [isSearch, setIsSearch] = useState(false);
  const [filterType, setFilterType] = useState<Filter>(Filter.Idle);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  useEffect(() => {
    setIsSearch(false);
    if (filterType !== Filter.Idle) {
      const query = `/movie/${filterType}?page=1`;
      dispatch(fetchMovies(query));
    }
  }, [dispatch, filterType]);

  const handeSearch = (value: string) => {
    const query = `/search/movie?page=1&query=${value}`;
    dispatch(fetchMovies(query));
    setIsSearch(true);
    navigate("/#search");
  };

  return (
    <div className="relative bg-zinc-950">
      <Navbar onSearch={handeSearch} />
      <Hero />
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 w-auto bg-neutral-950 rounded-3xl flex justify-between px-5">
        <div className="text-black font-bold text-lg flex items-center">
          <div
            onClick={() => setFilterType(Filter.Popular)}
            className={`${
              filterType === Filter.Popular ? "bg-orange-500" : "bg-zinc-700"
            } w-20 md:w-32 flex items-center justify-center h-10 text-white text-sm hover:bg-orange-400 cursor-pointer rounded-l-3xl`}
          >
            Popular
          </div>
          <div
            onClick={() => setFilterType(Filter.Now)}
            className={`${
              filterType === Filter.Now ? "bg-orange-500" : "bg-zinc-700"
            } w-24 md:w-32 flex items-center justify-center h-10 text-white text-sm hover:bg-orange-400 cursor-pointer`}
          >
            Now Playing
          </div>
          <div
            onClick={() => setFilterType(Filter.Top)}
            className={`${
              filterType === Filter.Top ? "bg-orange-500" : "bg-zinc-700"
            } w-20 md:w-32 flex items-center justify-center h-10 text-white text-sm hover:bg-orange-400 cursor-pointer`}
          >
            Top Rated
          </div>
          <div
            onClick={() => setFilterType(Filter.Upcoming)}
            className={`${
              filterType === Filter.Upcoming ? "bg-orange-500" : "bg-zinc-700"
            } w-20 md:w-32 flex items-center justify-center h-10 text-white text-sm hover:bg-orange-400 cursor-pointer rounded-r-3xl`}
          >
            Upcoming
          </div>
        </div>
      </div>
      <div className="bg-zinc-950 h-10"></div>
      {isSearch && (
        <MovieList
          endpoint=""
          label="Search Movies"
          id="search"
          dataList={searchMovies?.results ?? []}
          blur={false}
          moreDisplay={false}
        />
      )}
      {filterType !== Filter.Idle ? (
        <MovieList
          endpoint=""
          label={Label[filterType]}
          id={filterType}
          dataList={
            filterType === Filter.Popular
              ? popular?.results ?? []
              : filterType === Filter.Now
              ? nowPlaying?.results ?? []
              : filterType === Filter.Top
              ? topRated?.results ?? []
              : filterType === Filter.Upcoming
              ? upcoming?.results ?? []
              : []
          }
          blur={false}
          moreDisplay={false}
        />
      ) : (
        <>
          <MovieList
            endpoint="/movie/top_rated"
            label="Trending Movies"
            id="trending"
            dataList={topRated?.results ?? []}
            blur={loadingTrending}
          />
          <MovieList
            endpoint="/movie/upcoming"
            label="Upcoming Releases"
            id="upcoming"
            dataList={upcoming?.results ?? []}
            blur={loadingUpComing}
          />
        </>
      )}
      <Footer />
    </div>
  );
};
export default Home;
