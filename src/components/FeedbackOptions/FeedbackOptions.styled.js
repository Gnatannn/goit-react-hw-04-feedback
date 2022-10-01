import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid green;
  background-color: grey;
  color: white;
  border-radius: 10px;
  :hover {
    background-color: green;
    color: white;
  }
`;
