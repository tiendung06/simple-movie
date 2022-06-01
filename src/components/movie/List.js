import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { fetcher, tmdbAPI } from "../../config";
import Card from "../card/Card";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const List = ({ meta, type }) => {
  const { data } = useSWR(tmdbAPI.getList(meta, type), fetcher);
  const tv = data?.results || [];

  return (
    <div className="movie-list">
      <Swiper
        modules={[Scrollbar]}
        scrollbar={{ draggable: true }}
        grabCursor={"true"}
        spaceBetween={12}
        slidesPerView={"auto"}
      >
        {tv.length > 0 &&
          tv.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="mb-[30px]">
                <Card item={item} meta={meta}></Card>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default List;
