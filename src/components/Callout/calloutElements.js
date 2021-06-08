import styled from "styled-components";

export const Container = styled.section`
  background: linear-gradient(
    225.52deg,
    #271a00 0.45%,
    rgba(0, 0, 0, 0.982162) 100.47%
  );
  padding: 9.375rem 0;

  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 37.5rem;
`;

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

export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 3.125rem;
  line-height: 4.0625rem;
  text-align: center;
  letter-spacing: -0.0785rem;

  margin-bottom: 1.25rem;

  color: white;
`;
export const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.25rem;
  line-height: 1.75rem;

  text-align: center;
  letter-spacing: -0.0314rem;

  margin-bottom: 1.875rem;

  color: white;
`;
export const Button = styled.button`
  width: 209px;
  height: 70px;
  background-color: ${(props) => props.theme.yellow};

  outline: none;
  border: none;

  border-top-right-radius: 1.125rem;

  font-style: normal;
  font-weight: bold;
  font-size: 1.0625rem;
  line-height: 1.375rem;
  letter-spacing: -0.0267rem;

  color: black;
`;
export const ButtonIcon = styled.img`
  margin-left: 1.25rem;
`;
