import styled from "styled-components";
export const movies = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  > div {
    &:hover {
      background-color: #fff;
    }
  }
`;
export const loading = styled.h2`
  text-align: center;
`;
export const back = styled.div`
  margin-top: 2rem;
  text-align: right;
`;
