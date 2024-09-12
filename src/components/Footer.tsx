const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-8 pt-20 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left px-8 xl:px-[160px]">
        <div>
          <a
            href="/"
            className="text-2xl font-bold text-orange-500 cursor-pointer"
          >
            MovieQu
          </a>
          <p className="text-gray-400 mt-5">
            Make your day enjoyable by watching your favorite movies on MovieQu
            with a different viewing experience.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="hover:text-gray-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#trending" className="hover:text-gray-400 transition">
                Trending Movies
              </a>
            </li>
            <li>
              <a href="#upcoming" className="hover:text-gray-400 transition">
                Upcoming Releases
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-400">Email: moviewqu@movie.com</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; 2024 Movie Qu. All rights reserved.
      </div>
    </footer>
  );
};
export default Footer;
