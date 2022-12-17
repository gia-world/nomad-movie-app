import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Movie from "../../components/Movie";
import * as S from "../index.style";

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

export default function Detail() {
  const router = useRouter();
  const id = router.query.params;
  console.log("id:", id);

  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState<iDetail>({});
  console.log(typeof detail, "detail:", detail, "loading:", loading);

  const getMovie = async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    console.log("json:", json);
    setDetail(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    if (id) {
      getMovie();
    }
  }, [id]);
  return (
    <Layout>
      {loading ? (
        <S.loading>Loading...</S.loading>
      ) : (
        <>
          <h2>{detail.title_long}</h2>
          {detail && (
            <Movie isDetail={true} id={detail.id} summary={detail.description_full} genres={detail.genres} coverImg={detail.medium_cover_image} rating={detail.rating} runtime={detail.runtime} />
          )}
          <S.back>
            <Link href="/">&lt; Back</Link>
          </S.back>
        </>
      )}
    </Layout>
  );
}
