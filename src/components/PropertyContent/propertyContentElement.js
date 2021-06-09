import styled from "styled-components";

export const Content = styled.main`
  display: grid;
  grid-template-columns: 1fr 336px;
  gap: 23px;
  padding: 0 ${(props) => props.theme.sidePadding};
  padding-top: 3.75rem;
  padding-bottom: 9.375rem;
`;
