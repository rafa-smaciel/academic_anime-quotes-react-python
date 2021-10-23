import styled from 'styled-components';

export const Button = styled.button`
  background: #a40000;
  color: #fff;
  border: none;
  border-radius: 0;
  font-size: 1.5em;
  padding: 10px 20px;
  font-family: 'Arial', serif;
  cursor: pointer;
  box-shadow: #332c36 3px 3px;

  &:hover {
    background-color: #f27137;
  }

  &:focus {
    outline: none;
  }
`;
