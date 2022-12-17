import styled from "styled-components";
export const Movie = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #fafae6;
  border: 2px solid #fafae6;

  @media screen and (max-width: 700px) {
    img {
      width: 180px;
    }
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    gap: 0;
    > div:first-child {
      text-align: center;
      img {
        width: 150px;
      }
    }
  }
`;
export const sum = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
