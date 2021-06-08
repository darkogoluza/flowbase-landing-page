import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${(props) => props.src});
  width: 100%;
  height: 100vh;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;
`;

export const Wrapper = styled.section`
  padding: 0 ${(props) => props.theme.sidePadding};
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 5rem;
  line-height: 5rem;

  letter-spacing: -0.126rem;
  margin-top: 7.375rem;
  margin-bottom: 1.375rem;

  color: white;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.75rem;
  letter-spacing: -0.031rem;

  color: white;

  width: 428px;

  mix-blend-mode: normal;
  opacity: 0.6;
`;

export const ListingsWrapper = styled.div`
  height: 100px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 ${(props) => props.theme.sidePadding};
`;
export const ListingsContainer = styled.div`
  background-color: white;
  height: 100%;

  display: flex;
  align-items: center;
  padding-left: 2.5rem;
`;
export const ListingsText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.625rem;

  letter-spacing: -0.003rem;
  margin-right: 0.938rem;

  color: black;
`;
export const ListingsIcon = styled.img``;
