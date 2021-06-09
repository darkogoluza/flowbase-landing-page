import styled from "styled-components";

export const MainContent = styled.ul`
  & > * {
    margin-bottom: 2.5rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
`;
