import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Segoe UI', Verdana;
    background-color: #fcfef5;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  min-width: 700px;
  padding: 16px;
`;

export const Button = styled.button`
  color: #fcfef5;
  background: #89b399;
  font-size: 1em;
  width: 50%;
  margin-bottom: 8px;
  margin-top: 8px;
  padding: 10px;
  border: 2px solid #fafbe3;
  :hover {
    background: #6e6460;
    color: white;
  }
`;

export const Input = styled.input`
  font-size: 1rem;
  padding: 10px;
  width: 50%;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  ::placeholder {
    color: #89b399;
  }
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Form = styled.form`
  margin: 8% auto;
  width: 100%;
  background-color: #ced89d;
  width: 50%;
  padding: 16px;
  text-align: center;
  border-radius: 10%;
  border: 2px solid #6e6460;
`;

export const Title = styled.h1`
  font-size: 65px;
  font-weight: 600;
  color: #fcfef5;
  text-shadow: 0 0 15px #6e6460;
  text-align: center;
  background-color: #ced89d;
`;

export const H2 = styled.h2`
  color: #89b399;
  text-align: center;
  border-radius: 3px;
  background-color: #e9ffe1;
`;
