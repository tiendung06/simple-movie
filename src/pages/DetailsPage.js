import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import Card from "../components/card/Card";
import { fetcher, TabTitle, tmdbAPI } from "../config";
import "swiper/scss/autoplay";
import { Autoplay, Scrollbar } from "swiper";
import castImg from "../images/cast.png";
import unknowPoster from "../images/unknow_poster.png";
import Footer from "../components/layout/Footer";
import "swiper/css/scrollbar";

const DetailsPage = ({ meta = "movie" }) => {
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getDetails(meta, id), fetcher);
  if (!data) return null;
  const {
    backdrop_path,
    poster_path,
    name,
    title,
    genres,
    overview,
    first_air_date,
    release_date,
    vote_average,
  } = data;

  TabTitle(`${title || name}`);

  return (
    <div className="page-container">
      <div className="w-full h-[600px] relative mobile:h-screen">
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat flex items-center justify-center rounded-lg"
          style={{
            backgroundImage: `url(${
              backdrop_path
                ? tmdbAPI.imageOriginal(backdrop_path)
                : tmdbAPI.imageOriginal(poster_path)
            })`,
          }}
        >
          <div className="w-full h-[500px] mx-auto z-10 flex px-10 mobile:px-0">
            <div className="max-w-[400px] mobile:max-w-[250px] mobile:mx-auto mobile:hidden">
              <img
                src={
                  poster_path
                    ? tmdbAPI.imageOriginal(poster_path)
                    : unknowPoster
                }
                alt=""
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="pl-10 py-10 mobile:p-5 w-full">
              <h1 className="text-4xl mobile:text-3xl mobile:text-center font-bold text-white mb-5">
                {name || title}
              </h1>
              <div className="flex items-center mb-5 mobile:justify-center">
                <span className="mr-5">
                  {new Date(first_air_date || release_date).getFullYear() ||
                    "Unknow"}
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
              {genres.length > 0 && (
                <div className="flex items-center gap-x-5 mb-5 flex-wrap mobile:justify-center">
                  {genres.map((item) => (
                    <span
                      key={item.id}
                      className="py-2 px-4 mb-2 border-white text-white border rounded-md hover:text-primary hover:border-primary transition-all cursor-pointer"
                    >
                      {item.name}
                    </span>
                  ))}
                </div>
              )}
              <p className="leading-relaxed md:max-w-[800px] mobile:text-center text-ellipsis overflow-hidden overview">
                {overview}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Meta meta={meta} type="credits"></Meta>
      <Meta meta={meta} type="videos"></Meta>
      <Meta meta={meta} type="similar"></Meta>
      <Footer></Footer>
    </div>
  );
};

function Meta({ meta, type = "videos" }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useSWR(tmdbAPI.getMeta(meta, type, id), fetcher);
  if (!data) return null;
  if (type === "credits") {
    const { cast } = data;
    if (!cast || cast.length <= 0) return null;
    return (
      <div className="py-10">
        <h2 className="text-center text-3xl mb-10 font-medium no-select">
          Cast
        </h2>
        <div className="character-list">
          <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
            {cast.slice(0, 20).map((item) => (
              <SwiperSlide key={item.id}>
                <div
                  className="cast-item cursor-pointer"
                  onClick={() => navigate(`/person/${item.id}`)}
                >
                  <img
                    src={
                      item.profile_path
                        ? tmdbAPI.imageOriginal(item.profile_path)
                        : castImg
                    }
                    alt={item.name}
                    className="w-full h-[250px] object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-base font-medium text-center">
                    {item.name}
                  </h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    );
  } else {
    const { results } = data;
    if (!results || results.length <= 0) return null;
    if (type === "videos")
      return (
        <div className="py-10">
          <div className="flex flex-col gap-10">
            {results.slice(0, 4).map((item) => (
              <div className="" key={item.id}>
                <h3 className="mb-3 text-xl font-mediump p-3 text-center">
                  {item.name}
                </h3>
                <div
                  className="w-full aspect-video max-w-6xl mx-auto"
                  key={item.id}
                >
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${item.key}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full object-fill rounded-lg"
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    if (type === "similar")
      return (
        <div className="pt-10 pb-20">
          <h2 className="text-3xl font-medium mb-10 no-select">
            Similar movies
          </h2>
          <div className="movie-list">
            <Swiper
              modules={[Autoplay, Scrollbar]}
              grabCursor={"true"}
              spaceBetween={12}
              slidesPerView={"auto"}
              autoplay={{ delay: 5000 }}
              scrollbar={{ draggable: true }}
            >
              {results.length > 0 &&
                results.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="pb-[30px]">
                      <Card item={item} meta={meta}></Card>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      );
  }
  return null;
}

export default DetailsPage;
