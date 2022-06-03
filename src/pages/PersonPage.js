import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useSWR from "swr";
import Footer from "../components/layout/Footer";
import { fetcher, TabTitle, tmdbAPI } from "../config";
import backdrop from "../images/backdrop.png";
import cast from "../images/cast.png";

const PersonPage = () => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getPerson(id), fetcher);
  if (!data) return null;
  const {
    name,
    birthday,
    deathday,
    biography,
    place_of_birth,
    profile_path,
    popularity,
  } = data;
  TabTitle(`${name}`);
  return (
    <div>
      <div className="page-container">
        <div className="flex w-full mobile:flex-col pb-20">
          <div className="w-[400px] mobile:w-full">
            <img
              src={profile_path ? tmdbAPI.imageOriginal(profile_path) : cast}
              alt=""
              className="w-full h-full max-h-[500px] object-cover rounded-lg"
            />
          </div>
          <div className="px-10 pt-10 mobile:px-0 w-full">
            <div className="">
              <h1 className="text-4xl mobile:text-3xl mobile:text-center font-bold text-white mb-5">
                {name}
              </h1>
              <p className="mb-5">Birthday: {birthday || "Unknow"}</p>
              {deathday && <p className="mb-5">Deathday: {deathday}</p>}
              <p className="mb-5">
                Place of birth: {place_of_birth || "Unknow"}
              </p>
              <p className="mb-5">Popularity: {popularity || "Unknow"}</p>
              <div className="">
                <p className="mb-5">{biography}</p>
              </div>
            </div>
            <MovieCredit></MovieCredit>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

function MovieCredit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getPersonMovies(id), fetcher);
  if (!data) return null;
  const { crew } = data;
  if (!crew || crew.length <= 0) return null;
  const imgBackdrop = (item) => {
    if (item.backdrop_path === null) {
      if (item.poster_path === null) {
        return backdrop;
      } else {
        return tmdbAPI.image500(item.poster_path);
      }
    } else {
      return tmdbAPI.image500(item.backdrop_path);
    }
  };
  return (
    <>
      {crew && (
        <div className="py-5">
          <h1 className="text-3xl mobile:text-2xl mobile:text-center font-bold text-white mb-5 no-select">
            Lasted movie
          </h1>
          {crew.slice(0, 5).map((item) => (
            <div
              key={item.id}
              className="flex w-full h-[200px] p-3 bg-slate-800 rounded-lg my-3 cursor-pointer"
              onClick={() => navigate(`/movie/${item.id}`)}
            >
              <div className="w-[150px] h-full">
                <img
                  src={imgBackdrop(item)}
                  alt={item.title}
                  className="h-full w-full object-cover rounded-lg pt-"
                />
              </div>
              <div className="w-full p-3 overflow-hidden">
                <h1 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h1>
                <span className="mb-2 block">
                  {new Date(item.release_date).getFullYear() || "Unknow"}
                </span>
                <p className="overview-person">{item.overview}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default PersonPage;
