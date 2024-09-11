import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Navbar from "../components/ui/Navbar";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <MovieList
        endpoint="/movie/top_rated"
        label="Trending Movies"
        id="trending"
      />
      {/* <MovieList
        endpoint="/movie/popular?language=en-US&page=1"
        label="Popular"
        id="popular"
      /> */}
    </div>
  );
};
export default Home;
