import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  border-radius: 25px;
`;

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.25rem;
  line-height: 1.625rem;

  letter-spacing: -0.0314rem;

  color: black;

  padding: 1.875rem;
  background-color: white;

  border-bottom: 1px solid #e4e4e4;
`;

export const Content = styled.ul`
  padding: 1.875rem;
  background-color: white;
  display: grid;
  grid-template-columns: auto 1fr auto;
  row-gap: 1.25rem;
  align-items: center;
`;
export const Item = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemIcon = styled.img`
  width: 1rem;
  height: 1rem;
  margin-right: 0.625rem;
`;
export const ItemText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.375rem;

  letter-spacing: -0.0236rem;

  color: black;

  mix-blend-mode: normal;
  opacity: 0.6;
`;
