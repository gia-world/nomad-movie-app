import styled from "styled-components";
export const Layout = styled.div`
  display: grid;
  font-family: "Montserrat", sans-serif;
  line-height: 1.5;
  a:hover {
    text-decoration: underline;
  }
`;
export const main = styled.main`
  width: calc(100% - 6rem);
  max-width: 80rem;
  margin: 3rem auto;
`;
