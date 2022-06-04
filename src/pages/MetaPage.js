import React, { useEffect } from "react";
import Button from "../components/button/Button";
import Card from "../components/card/Card";
import Footer from "../components/layout/Footer";
import { fetcher, TabTitle, tmdbAPI } from "../config";
import useSWRInfinite from "swr/infinite";

const itemsPerPage = 20;
const MetaPage = ({ meta, title, type }) => {
  const { data, error, size, setSize } = useSWRInfinite(
    (index) =>
      tmdbAPI.getList(meta, type, 1).replace("page=1", `page=${index + 1}`),
    fetcher
  );
  const movies = data ? data.reduce((a, b) => a.concat(b.results), []) : [];
  const loading = !data && !error;
  const isEmpty = data?.[0]?.results.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.results.length < itemsPerPage);

  useEffect(() => {
    TabTitle(`${title}`);
  }, [title]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [meta, type]);

  return (
    <div className="page-container">
      <div className="flex mb-10">
        <h2 className="capitalize text-white text-3xl font-bold no-select">
          {title}
        </h2>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-primary border-t-transparent border-t-4 mx-auto animate-spin"></div>
      )}
      <div className="grid gap-3 movie-page mx-auto">
        {!loading &&
          movies.length > 0 &&
          movies.map((item) => (
            <Card key={item.id} item={item} meta={meta}></Card>
          ))}
      </div>
      <div className="mt-10 pb-10 text-center">
        <Button
          className={`max-w-[180px] ${isReachingEnd ? "hidden" : ""}`}
          onClick={() => setSize(size + 1)}
          disabled={isReachingEnd}
        >
          Load more
        </Button>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MetaPage;
