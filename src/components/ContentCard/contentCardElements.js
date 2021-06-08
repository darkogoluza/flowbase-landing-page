import styled from "styled-components";

export const Card = styled.div`
  height: 700px;
  background-color: white;
  position: relative;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -175px;
  width: 100%;
`;
export const Content = styled.div`
  width: 474px;
  margin-bottom: 150px;
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
export const Image = styled.img`
  width: 704px;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 50px;
  line-height: 65px;
  letter-spacing: -1.25641px;

  margin-bottom: 1.25rem;

  color: #000000;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.75rem;

  letter-spacing: -0.0314rem;

  margin-bottom: 1.875rem;

  color: black;

  mix-blend-mode: normal;
  opacity: 0.6;
`;
export const Button = styled.button`
  width: 209px;
  height: 70px;

  background-color: black;

  font-style: normal;
  font-weight: bold;
  font-size: 1.0625rem;
  line-height: 1.375rem;
  letter-spacing: -0.0267rem;

  outline: none;
  border: none;

  color: white;
  border-top-right-radius: 1.125rem;
`;
export const ButtonIcon = styled.img`
  margin-left: 1.25rem;
`;
