import styled from "styled-components";

export const Container = styled.div``;
export const Banner = styled.img`
  border-radius: 0px 3.5625rem 0px 0px;
  margin-bottom: 1.25rem;

  width: 100%;
`;

export const Gallery = styled.ul`
  display: flex;
`;
export const GalleryImage = styled.img`
  flex-grow: 1;
  margin-right: 1.5rem;
  &:last-child {
    margin-right: 0;
  }
`;
