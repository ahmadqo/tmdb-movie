import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/store";
import { SECURE_IMAGE_BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { fetchMovies } from "../features/movies/moviesSlice";

// interface HeroProps {
//   title: string;
//   overview: string;
//   image: string;
// }

const Hero = () => {
  const dispatch: AppDispatch = useDispatch();
  const { popular } = useSelector((state: RootState) => state.movies);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchMovies("/movie/popular?language=en-US&page=1"));
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % popular.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [popular]);

  return (
    <section
      id="home"
      className="relative h-[900px] justify-center bg-cover bg-center px-8 xl:px-[160px] transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url('${SECURE_IMAGE_BASE_URL}/original${popular[currentIndex]?.backdrop_path}')`,
      }}
    >
      <div className="absolute inset-0 w-full h-24 bg-gradient-to-b from-zinc-950 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />

      <div className="flex flex-col justify-center w-full h-full">
        <div className="w-full md:w-1/2 z-10">
          <h1 className="text-white text-4xl font-bold transition-all duration-300 ease-in-out">
            {popular[currentIndex]?.title}
          </h1>
        </div>
        <div className="w-full md:w-4/5 z-10 leading-8 mt-10">
          <div className="text-orange-500 text-lg font-bold ">Overview</div>
          <span className="text-white text-base transition-all duration-300 ease-in-out">
            {popular[currentIndex]?.overview}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
