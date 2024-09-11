import { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [searchOpen, setSearchOpen] = useState(false);

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
        <div className="text-2xl font-bold text-orange-500">MovieQu</div>
        <div className="relative flex items-center">
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
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#trending" className="hover:text-gray-300">
              Tranding
            </a>
            {/* <a href="#popular" className="hover:text-gray-300">
              Upcoming
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
