import React, { Fragment, useEffect } from "react";
import Footer from "../components/layout/Footer";
import List from "../components/movie/List";
import { TabTitle } from "../config";

const HomePage = () => {
  useEffect(() => {
    TabTitle("Home");
  }, []);

  return (
    <Fragment>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold no-select">
          Now playing
        </h2>
        <List meta="movie" type="now_playing"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold no-select">
          Top rated
        </h2>
        <List meta="movie" type="top_rated"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold no-select">
          Trending
        </h2>
        <List meta="movie" type="popular"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold no-select">
          TV on the air
        </h2>
        <List meta="tv" type="on_the_air"></List>
      </section>
      <section className="page-container">
        <Footer></Footer>
      </section>
    </Fragment>
  );
};

export default HomePage;
