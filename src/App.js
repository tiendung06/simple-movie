import { Fragment, lazy, Suspense } from "react";
import "./App.css";
import "swiper/scss";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import Banner from "./components/banner/Banner";

const HomePage = lazy(() => import("./pages/HomePage"));
const Page = lazy(() => import("./pages/Page"));
const DetailsPage = lazy(() => import("./pages/DetailsPage"));

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
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
