import styled from "styled-components";

export const Container = styled.section`
  padding: 9.375rem 0;

  display: flex;
  justify-content: center;

  align-items: flex-end;

  & > * {
    margin-right: 1.25rem;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
export const QuoteCard = styled.div`
  width: 336px;
`;
export const Line = styled.section`
  width: 336px;
  height: 4px;
  background: linear-gradient(
    90deg,
    rgba(255, 172, 18, 1) 0%,
    rgba(0, 0, 0, 1) 100%
  );

  margin-bottom: 2.5rem;
`;
export const QuoteText = styled.section`
  font-style: normal;
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.9375rem;
  letter-spacing: -0.0377rem;

  margin-bottom: 3.75rem;

  color: black;
`;

export const ClientCard = styled.div`
  width: 100%;
  background-color: ${(props) => props.color};
  display: flex;
  padding: 2.875rem 2.5rem;
`;
export const ClientContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const ClientName = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 1.25rem;

  letter-spacing: -0.0236rem;

  color: ${(props) => props.color};
`;
export const ClientText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.25rem;

  letter-spacing: -0.0236rem;

  color: #979797;
`;
export const ClientImage = styled.img`
  margin-right: 1.25rem;
`;
