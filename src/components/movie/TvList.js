import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import TvCard from "./TvCard";

const TvList = ({ type = "on_the_air" }) => {
  const { data } = useSWR(tmdbAPI.getTvList(type), fetcher);
  const tv = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={12} slidesPerView={"auto"}>
        {tv.length > 0 &&
          tv.map((item) => (
            <SwiperSlide key={item.id}>
              <TvCard item={item}></TvCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default TvList;
