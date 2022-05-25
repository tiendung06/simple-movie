import React, { Fragment } from "react";
import List from "../components/movie/List";

const HomePage = () => {
  return (
    <Fragment>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <List meta="movie" type="now_playing"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rated
        </h2>
        <List meta="movie" type="top_rated"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <List meta="movie" type="popular"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          TV on the air
        </h2>
        <List meta="tv" type="on_the_air"></List>
      </section>
    </Fragment>
  );
};

export default HomePage;
