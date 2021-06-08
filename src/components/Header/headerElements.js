import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 ${(props) => props.theme.sidePadding};
  padding-top: 2rem;
`;
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-grow: 1;
`;
export const Logo = styled.img`
  width: 128px;
  height: 34px;
`;
export const NavWrapper = styled.ul`
  & > * {
    margin-right: 3.75rem;
  }
`;
export const NavLink = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 0.938rem;
  line-height: 1.25rem;

  letter-spacing: -0.024rem;

  color: white;

  text-decoration: none;
`;
export const Button = styled.button`
  width: 211px;
  height: 50px;

  outline: none;
  border: none;

  font-style: normal;
  font-weight: bold;
  font-size: 1.063rem;
  line-height: 1.375rem;
  letter-spacing: -0.027rem;

  color: black;

  background-color: ${(props) => props.theme.yellow};

  border-top-right-radius: 1.125rem;
`;
export const ButtonArrow = styled.img`
  margin-left: 0.625rem;
`;
