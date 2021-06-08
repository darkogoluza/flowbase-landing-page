import styled from "styled-components";

export const Container = styled.div``;
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
export const Title = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 3.125rem;
  line-height: 4.0625rem;
  letter-spacing: -0.0785rem;

  margin-bottom: 3.75rem;

  color: black;
`;
export const FilterContainer = styled.div`
  display: flex;
`;
export const FilterButton = styled.button`
  flex-grow: 1;

  outline: none;
  border: none;

  background-color: white;
  height: 120px;
  border-right: 1px solid #e4e4e4;

  font-style: normal;
  font-weight: bold;
  font-size: 1.0625rem;
  line-height: 1.375rem;
  letter-spacing: -0.0267rem;

  color: black;

  &:first-child {
    border-radius: 1.5625rem 0px 0px 1.5625rem;
  }

  &:last-child {
    border-radius: 0px 1.5625rem 1.5625rem 0px;
    border-right: 0px solid #e4e4e4;
  }
`;
export const FilterButtonIcon = styled.img`
  margin-left: 0.5625rem;
`;
