import styled from "styled-components";

export const Container = styled.div`
  background-color: white;
  padding: 1.25rem;

  overflow: hidden;
  border-radius: 25px;
`;
export const User = styled.div`
  padding: 0.9375rem 1.0625rem;
  background-color: #f5f5f5;

  border-radius: 0.625rem;

  display: flex;
  align-items: center;

  margin-bottom: 1.25rem;
`;
export const UserIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;

  margin-right: 0.625rem;
`;
export const UserContent = styled.div``;
export const UserName = styled.h1`
  font-style: normal;
  font-weight: normal;
  font-size: 0.9375rem;
  line-height: 1.25rem;

  letter-spacing: -0.0236rem;

  color: black;
`;
export const UserLink = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 0.8125rem;
  line-height: 1.0625rem;

  letter-spacing: -0.0204rem;

  text-decoration: none;

  color: #ffac12;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.75rem;

  margin-bottom: 0.625rem;

  border-radius: 0.625rem;

  outline: 0px;
  border: 1px solid #ebebeb;

  padding: 0 1.25rem;
`;

export const Message = styled.input`
  width: 100%;
  height: 6.25rem;

  margin-bottom: 0.625rem;

  border-radius: 0.625rem;

  outline: 0px;
  border: 1px solid #ebebeb;

  padding: 0 1.25rem;
  padding-bottom: 3rem;
`;
export const Button = styled.button`
  display: block;
  height: 4.375rem;
  width: 100%;
  background-color: black;

  border-top-right-radius: 1.125rem;

  font-style: normal;
  font-weight: bold;
  font-size: 1.0625rem;
  line-height: 1.375rem;
  letter-spacing: -0.0267rem;

  color: white;
`;
export const ButtonIcon = styled.img`
  margin-left: 1.1875rem;
`;
