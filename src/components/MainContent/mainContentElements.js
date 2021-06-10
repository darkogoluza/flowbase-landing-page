import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  padding: 0 11.5625rem;
  padding-top: 13.5rem;
`;

export const HousesList = styled.ul`
  margin-top: 4.75rem;

  display: grid;
  gap: 1.9375rem;

  grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
`;
