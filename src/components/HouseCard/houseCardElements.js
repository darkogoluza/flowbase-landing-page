import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  width: 336px;

  overflow: hidden;
  border-radius: 1.5625rem;
`;
export const Hero = styled.div`
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 266px;
  width: 100%;
`;
export const Name = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.9375rem;
  letter-spacing: -0.0377rem;

  background-color: white;
  padding: 1.875rem;
  border-bottom: 1px solid #e4e4e4;

  color: black;
`;
export const Stats = styled.div`
  display: flex;
`;
export const Stat = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.75rem;
  background-color: white;

  border-right: 1px solid #e4e4e4;

  &:last-child {
    border-right: 0px solid #e4e4e4;
  }
`;
export const StatIcon = styled.img`
  width: 1rem;
  height: 1rem;

  margin-right: 0.625rem;
`;
export const StatNumber = styled.p``;
