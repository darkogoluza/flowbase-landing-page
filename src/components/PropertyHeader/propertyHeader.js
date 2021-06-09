import styled from "styled-components";

export const Container = styled.section`
  background-color: black;
  margin-bottom: 5rem;
  padding-bottom: 1.375rem;
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 ${(props) => props.theme.sidePadding};
`;
export const Line = styled.div`
  background: white;
  mix-blend-mode: normal;
  opacity: 0.1;

  width: 100%;
  height: 1px;

  margin-top: 2rem;
  margin-bottom: 1.3125rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  line-height: 2.625rem;

  letter-spacing: -0.0503rem;

  color: white;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.5rem;

  letter-spacing: -0.0236rem;

  color: white;

  mix-blend-mode: normal;
  opacity: 0.6;
`;
