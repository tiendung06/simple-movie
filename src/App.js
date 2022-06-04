import { Fragment, lazy, Suspense } from "react";
import "./App.css";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";

const HomePage = lazy(() => import("./pages/HomePage"));
const Page = lazy(() => import("./pages/Page"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));
const PersonPage = lazy(() => import("./pages/PersonPage"));
const MetaPage = lazy(() => import("./pages/MetaPage"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
        <Routes>
          <Route element={<Main></Main>}>
            <Route
              path="/"
              element={
                <>
                  <Banner></Banner>
                  <HomePage></HomePage>
                </>
              }
            ></Route>
            <Route path="/movie" element={<Page meta="movie"></Page>}></Route>
            <Route
              path="/movie/:id"
              element={<DetailsPage meta="movie"></DetailsPage>}
            ></Route>
            <Route path="/tv" element={<Page meta="tv"></Page>}></Route>
            <Route
              path="/tv/:id"
              element={<DetailsPage meta="tv"></DetailsPage>}
            ></Route>
            <Route
              path="/person/:id"
              element={<PersonPage></PersonPage>}
            ></Route>
            <Route
              path="/movie/now_playing"
              element={
                <MetaPage
                  meta="movie"
                  title="Now Playing"
                  type="now_playing"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/movie/popular"
              element={
                <MetaPage
                  meta="movie"
                  title="Popular"
                  type="popular"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/movie/top_rated"
              element={
                <MetaPage
                  meta="movie"
                  title="Top Rated"
                  type="top_rated"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/movie/upcoming"
              element={
                <MetaPage
                  meta="movie"
                  title="Upcoming"
                  type="upcoming"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/tv/airing_today"
              element={
                <MetaPage
                  meta="tv"
                  title="TV Airing Today"
                  type="airing_today"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/tv/on_the_air"
              element={
                <MetaPage
                  meta="tv"
                  title="TV On The Air"
                  type="on_the_air"
                ></MetaPage>
              }
            ></Route>
            <Route
              path="/tv/popular"
              element={
                <MetaPage meta="tv" title="Popular" type="popular"></MetaPage>
              }
            ></Route>
            <Route
              path="/tv/top_rated"
              element={
                <MetaPage
                  meta="tv"
                  title="Top Rated"
                  type="top_rated"
                ></MetaPage>
              }
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
