import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import Movie from "../components/Movie";
import * as S from "../styles/index.style";
import { MovieP } from "../types/type";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  // console.log(typeof movies, "loading:", loading, movies);

  const getMovies = async () => {
    const res = await fetch(
      `https://yts-proxy.now.sh/list_movies.json?minimum_rating=8&sort_by=year`
    );
    const json = await res.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Layout>
      {loading ? (
        <S.loading>Loading...</S.loading>
      ) : (
        <S.movies>
          {movies.map(
            // (it: {
            //   id: string;
            //   title: string;
            //   summary: string;
            //   genres: Array<String>;
            //   medium_cover_image: string;
            // }) => (
              (it:Partial<MovieP> )=>(
              <Movie
                key={it.id}
                id={it.id}
                title={it.title}
                summary={it.summary}
                genres={it.genres}
                coverImg={it.medium_cover_image}
              />
            )
          )}
        </S.movies>
      )}
    </Layout>
  );
};

export default Home;
