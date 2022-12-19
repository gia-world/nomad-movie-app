import { GetServerSidePropsContext } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";
import * as S from "../../styles/index.style";

interface iDetail {
  id?: string;
  title?: string;
  description_full?: string;
  genres?: Array<String>;
  medium_cover_image?: string;
  isDetail?: boolean;
  title_long?: string;
  rating?: string;
  runtime?: string;
}
const getMovie = async (id: string) => {
  const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  ).json();
  return json.data.movie;
};
export default function Detail({ movie }: any) {
  // const router = useRouter();
  // const id = router.query.params;
  // const [loading, setLoading] = useState(true);
  // const [detail, setDetail] = useState<iDetail>(   getMovie());

  // useEffect(() => {
  //   if (id) {
  //     getMovie();
  //   }
  // }, [id]);
  return (
    <Layout>
      {/* {loading ? (
        <S.loading>Loading...</S.loading>
      ) : (
        <>
          <h2>{detail.title_long}</h2>
          {detail && (
            <Movie
              isDetail={true}
              id={detail.id}
              summary={detail.description_full}
              genres={detail.genres}
              coverImg={detail.medium_cover_image}
              rating={detail.rating}
              runtime={detail.runtime}
            />
          )}
          <S.back>
            <Link href="/">&lt; Back</Link>
          </S.back>
        </>
      )} */}

      <>
        <h2>{movie.title_long}</h2>
        {movie && (
          <Movie
            isDetail={true}
            id={movie.id}
            summary={movie.description_full}
            genres={movie.genres}
            coverImg={movie.medium_cover_image}
            rating={movie.rating}
            runtime={movie.runtime}
          />
        )}
        <S.back>
          <Link href="/">&lt; Back</Link>
        </S.back>
      </>
    </Layout>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params!.id as string;
  const movie = await getMovie(id);
  console.log("--------------------", id);
  return {
    props: { movie }, // will be passed to the page component as props
  };
}
