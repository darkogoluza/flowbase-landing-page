import styled from "styled-components";

export const Container = styled.footer`
  background-color: black;

  padding: 0 11.5625rem;

  padding-top: 5rem;
  padding-bottom: 9.375rem;
`;
export const Button = styled.button`
  width: 211px;
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
  margin-left: 0.625rem;
`;
export const Title = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 2.625rem;
  line-height: 3.4375rem;

  letter-spacing: -0.066rem;

  margin-bottom: 3.125rem;

  color: white;
`;
export const TitleHighlight = styled.span`
  color: ${(props) => props.theme.yellow};
`;
export const Logo = styled.img`
  width: 128px;
  height: 34px;

  margin-bottom: 1.875rem;
`;
export const Social = styled.div`
  flex-grow: 1;
`;
export const SocialLinks = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 128px;
`;
export const SocialLink = styled.a`
  width: 22px;
  height: 22px;

  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: contain;
`;
export const Links = styled.ul`
  & > * {
    margin-bottom: 0.625rem;
  }
  & > *:last-child {
    margin-bottom: 0;
  }

  margin-right: 9.9375rem;
  &:last-child {
    margin-right: 0;
  }
`;
export const LinksTitle = styled.h3`
  font-style: normal;
  font-weight: bold;
  font-size: 0.9375rem;
  line-height: 1.25rem;

  letter-spacing: -0.0236rem;

  color: white;
`;
export const Link = styled.a`
  display: block;

  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.25rem;

  letter-spacing: -0.0236rem;

  text-decoration: none;

  color: #979797;
`;
export const UpperFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Line = styled.div`
  width: 100%;
  height: 1px;

  background: white;
  mix-blend-mode: normal;
  opacity: 0.1;

  margin-bottom: 3.75rem;
`;
export const LowerFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;
