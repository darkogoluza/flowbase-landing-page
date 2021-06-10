import styled from "styled-components";

export const Container = styled.section`
  margin: 9.375rem 0;
  padding-left: ${(props) => props.theme.sidePadding};
`;
export const Line = styled.div`
  width: 169px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 172, 18, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );
  margin-bottom: 1.0625rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 3.125rem;
  line-height: 4.0625rem;
  letter-spacing: -0.0785rem;

  color: black;

  margin-bottom: 3.75rem;
`;
export const HousesCardContainer = styled.ul`
  display: flex;
  overflow-x: scroll;
  width: 100%;
  gap: 1.9375rem;

  & > * {
    flex-shrink: 0;
  }
`;
