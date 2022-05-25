import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Button from "../button/Button";
import "swiper/scss/autoplay";
import { Autoplay } from "swiper";

const Banner = () => {
  const { data } = useSWR(tmdbAPI.getList("movie", "upcoming"), fetcher);
  const movies = data?.results || [];

  return (
    <section className="banner h-[550px] page-container mb-20 overflow-hidden select-none">
      <Swiper
        modules={[Autoplay]}
        grabCursor="true"
        slidesPerView={"auto"}
        autoplay={{ delay: 5000 }}
        spaceBetween={40}
      >
        {movies.length > 0 &&
          movies.slice(0, 8).map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}></BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

function BannerItem({ item }) {
  const { title, backdrop_path, id, vote_average, release_date } = item;
  const navigate = useNavigate();
  return (
    <div
      className="w-full h-full rounded-lg relative"
      onClick={() => navigate(`/movie/${id}`)}
    >
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={tmdbAPI.imageOriginal(backdrop_path)}
        alt=""
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl">{title}</h2>
        <div className="flex items-center gap-x-5 mb-3">
          <span className="py-2">{new Date(release_date).getFullYear()}</span>
          <div className="flex items-center">
            <span className="py-2">{vote_average}</span>
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
        <Button className="w-auto">Watch now</Button>
      </div>
    </div>
  );
}

export default Banner;
