import React, { Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";
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
        <div className="flex justify-between mb-10 items-center">
          <h2 className="capitalize text-white  text-3xl font-bold no-select">
            Now playing
          </h2>
          <NavLink
            to="/movie/now_playing"
            className="text-white no-select cursor-pointer hover:text-primary transition-all"
          >
            Expand
          </NavLink>
        </div>
        <List meta="movie" type="now_playing"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <div className="flex justify-between mb-10 items-center">
          <h2 className="capitalize text-white text-3xl font-bold no-select">
            Top rated
          </h2>
          <NavLink
            to="/movie/popular"
            className="text-white no-select cursor-pointer hover:text-primary transition-all"
          >
            Expand
          </NavLink>
        </div>
        <List meta="movie" type="top_rated"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <div className="flex justify-between mb-10 items-center">
          <h2 className="capitalize text-white text-3xl font-bold no-select">
            Trending
          </h2>
          <NavLink
            to="/movie/popular"
            className="text-white no-select cursor-pointer hover:text-primary transition-all"
          >
            Expand
          </NavLink>
        </div>
        <List meta="movie" type="popular"></List>
      </section>
      <section className="movies-layout page-container pb-20">
        <div className="flex justify-between mb-10 items-center">
          <h2 className="capitalize text-white text-3xl font-bold no-select">
            TV On The Air
          </h2>
          <NavLink
            to="/tv/on_the_air"
            className="text-white no-select cursor-pointer hover:text-primary transition-all"
          >
            Expand
          </NavLink>
        </div>
        <List meta="tv" type="on_the_air"></List>
      </section>
      <section className="page-container">
        <Footer></Footer>
      </section>
    </Fragment>
  );
};

export default HomePage;
