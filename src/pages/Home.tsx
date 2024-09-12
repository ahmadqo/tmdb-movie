import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Navbar from "../components/ui/Navbar";
import { RootState } from "../store/store";

const Home = () => {
  // const dispatch: AppDispatch = useDispatch();
  const {
    // status,
    // error,
    // popular,
    // nowPlaying,
    topRated,
    upcoming,
  } = useSelector((state: RootState) => state.movies);

  // useEffect(() => {
  //   const query = `${endpoint}?page=${page}`;
  //   dispatch(fetchMovies(query));
  // }, [dispatch, endpoint, page]);

  return (
    <div className="relative bg-zinc-950">
      <Navbar />
      <Hero />
      <MovieList
        endpoint="/movie/top_rated"
        label="Trending Movies"
        id="trending"
        dataList={topRated?.results ?? []}
      />
      <MovieList
        endpoint="/movie/upcoming"
        label="Upcoming Releases"
        id="upcoming"
        dataList={upcoming?.results ?? []}
      />
      <Footer />
    </div>
  );
};
export default Home;
