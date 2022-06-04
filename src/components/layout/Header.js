import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5 select-none">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:opacity-75 transition-opacity"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movie"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:opacity-75 transition-opacity"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/tv"
          className={({ isActive }) =>
            isActive ? "text-primary" : "hover:opacity-75 transition-opacity"
          }
        >
          TV Series
        </NavLink>
      </header>
      {showTopBtn && (
        <div className="fixed bottom-5 right-5 z-50">
          <button
            className="bg-primary w-full h-full p-3 rounded-full hover:opacity-75 transition-opacity"
            onClick={goToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
