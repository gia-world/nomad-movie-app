import Link from "next/link";
import React from "react";
import * as S from "./Movie.style";

export interface Props {
  id?: string;
  title?: string;
  summary?: string;
  genres?: Array<String>;
  coverImg?: string;
  isDetail?: boolean;
  rating?: string;
  runtime?: string;
}
const Movie = ({
  isDetail,
  id,
  title,
  summary,
  genres,
  coverImg,
  rating,
  runtime,
}: Props) => {
  return (
    <S.Movie key={id}>
      <div>
        <img src={coverImg} alt={title} />
      </div>
      <div>
        <h2>
          <Link href={`/movies/${id}`}>{title}</Link>
        </h2>
        {isDetail ? (
          <div>
            <p>Rating : {rating} / 10</p>
            <p>Runtime : {runtime}min</p>
            <p>{summary}</p>
          </div>
        ) : (
          <S.sum>{summary}</S.sum>
        )}

        <ul>
          {genres &&
            genres.map((g) => (
              <li key={String(g)}>{g}</li>
              //? String() 을 해야 먹히는 이유
            ))}
        </ul>
      </div>
    </S.Movie>
  );
};

export default Movie;
