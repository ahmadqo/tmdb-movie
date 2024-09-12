import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollY = window.scrollY;
        const h = navbarRef.current.offsetHeight;

        if (scrollY > h) {
          navbarRef?.current.classList.add("navbar-scrool-bg");
          navbarRef?.current.classList.remove("bg-transparent");
        } else {
          navbarRef?.current.classList.remove("navbar-scrool-bg");
          navbarRef?.current.classList.add("bg-transparent");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      ref={navbarRef}
      className="fixed w-full top-0 z-20 bg-transparent px-8 xl:px-[160px] transition-all duration-300 ease-in-out"
    >
      <div className="flex items-center justify-between text-white h-[90px]">
        <a
          href="/"
          className="text-2xl font-bold text-orange-500 cursor-pointer"
        >
          MovieQu
        </a>
        <div className="relative hidden md:flex items-center">
          <div className="flex items-center space-x-2 mr-7">
            <div
              className={`transition-width duration-300 ease-in-out overflow-hidden ${
                searchOpen ? "w-64" : "w-0"
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="bg-white text-black px-4 py-2 rounded-full w-full focus:outline-none text-sm"
              />
            </div>
            <button
              onClick={handleSearchToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-10 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 4a8 8 0 110 16 8 8 0 010-16zM21 21l-4.35-4.35"
                />
              </svg>
            </button>
          </div>
          <div className="space-x-10">
            <a href="/#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="/#trending" className="hover:text-gray-300">
              Trending Movies
            </a>
            <a href="/#upcoming" className="hover:text-gray-300">
              Upcoming Releases
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>
      </div>
      <div
        className={`${
          isOpen ? "max-h-screen" : "max-h-0"
        }  bg-zinc-900 rounded-xl overflow-hidden transition-all duration-500 ease-in-out md:hidden`}
      >
        <div className="flex flex-col space-y-4 p-4 w-full">
          <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#trending" className="text-gray-300 hover:text-white">
            Trending Movies
          </a>
          <a href="#upcoming" className="text-gray-300 hover:text-white">
            Upcoming Releases
          </a>
          {/* Mobile search bar */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-white text-black px-4 py-2 rounded-full w-full focus:outline-none text-sm"
            />
            <button className="bg-orange-500 px-4 py-2 rounded-full text-white text-md font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
