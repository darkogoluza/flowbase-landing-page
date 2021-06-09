import styled from "styled-components";

export const Container = styled.div`
  overflow: hidden;
  border-radius: 1.5625rem;
`;
export const Title = styled.h1`
  padding: 1.875rem;
  background-color: white;

  border-bottom: 1px solid #e4e4e4; ;
`;
export const StatsList = styled.ul`
  display: flex;
`;
export const Stat = styled.li`
  list-style: none;
  flex-grow: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 3.75rem;

  border-right: 1px solid #e4e4e4;

  &:last-child {
    border-right: 0px solid #e4e4e4;
  }
`;
export const StatIcon = styled.img`
  margin-right: 0.625rem;
  width: 1rem;
  height: 1rem;
`;
export const StatText = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 1.0625rem;
  line-height: 1.375rem;
  letter-spacing: -0.0267rem;

  color: black;
`;
