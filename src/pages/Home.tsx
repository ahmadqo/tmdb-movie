import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MovieList from "../components/MovieList";
import Navbar from "../components/ui/Navbar";

const Home = () => {
  return (
    <div className="relative bg-zinc-950">
      <Navbar />
      <Hero />
      <MovieList
        endpoint="/movie/top_rated"
        label="Trending Movies"
        id="trending"
      />
      <MovieList
        endpoint="/movie/upcoming"
        label="Upcoming Releases"
        id="upcoming"
      />
      <Footer />
    </div>
  );
};
export default Home;
