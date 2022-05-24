import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-primary" : "hover:opacity-75 transition-opacity"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
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
  );
};

export default Header;
