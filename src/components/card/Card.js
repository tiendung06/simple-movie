import React from "react";
import { useNavigate } from "react-router-dom";
import { tmdbAPI } from "../../config";
import Button from "../button/Button";
import backdrop from "../../images/backdrop.png";

const Card = ({ item, meta }) => {
  const {
    name,
    title,
    vote_average,
    release_date,
    first_air_date,
    backdrop_path,
    poster_path,
    id,
  } = item;
  const navigate = useNavigate();

  const imgBackdrop = () => {
    if (backdrop_path === null) {
      if (poster_path === null) {
        return backdrop;
      } else {
        return tmdbAPI.image500(poster_path);
      }
    } else {
      return tmdbAPI.image500(backdrop_path);
    }
  };

  return (
    <div
      className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full min-h-[450px] cursor-pointer"
      onClick={() => navigate(`/${meta}/${id}`)}
    >
      <img
        src={imgBackdrop()}
        alt={name || title}
        className="w-full h-[250px] object-cover rounded-lg mb-5"
      />
      <div className="flex flex-col flex-1 justify-between">
        <h3 className="text-xl font-bold mb-3">{name || title}</h3>
        <div className="flex items-center justify-between text-sm opacity-50 mb-5">
          <span>
            {new Date(first_air_date || release_date).getFullYear() || "Unknow"}
          </span>
          <div className="flex items-center">
            <span>{vote_average}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 pl-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
      </div>
      <Button>Watch now</Button>
    </div>
  );
};

export default Card;
