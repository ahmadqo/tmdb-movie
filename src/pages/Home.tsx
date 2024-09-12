import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Navbar from "../components/ui/Navbar";
import { AppDispatch, RootState } from "../store/store";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovies } from "../features/movies/moviesSlice";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch: AppDispatch = useDispatch();

  const { loadingTrending, loadingUpComing, topRated, upcoming, searchMovies } =
    useSelector((state: RootState) => state.movies);

  const [isSearch, setIsSearch] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
      {isSearch ? (
        <MovieList
          endpoint="/movie/top_rated"
          label="Search Movies"
          id="search"
          dataList={searchMovies?.results ?? []}
          blur={false}
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
