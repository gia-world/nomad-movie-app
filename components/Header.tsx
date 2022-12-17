import Link from 'next/link';
import React from 'react'
import * as S from "./Header.style";

const Header = () => {
  return (
    <S.Header>
      <h1>The list of the movies over rating 8</h1>
      <p>Click the title of movie to check their detail</p>
    </S.Header>
  )
}

export default Header