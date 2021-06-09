import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 336px;
  gap: 23px;
  padding: 0 ${(props) => props.theme.sidePadding};
`;
