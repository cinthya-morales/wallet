import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    /* margin-top: 10%; */
    background-image: url('../src/Money.jpeg');
    font-family: 'Segoe UI', Verdana;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Button = styled.button`
  color: papayawhip;
  background: palevioletred;
  font-size: 1em;
  width: 50%;
  margin-bottom: 1em;
  padding: 0.25em;
  border: 2px solid palegreen;
  :hover {
    background: rgb(200, 50, 70);
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
    color: palevioletred;
  }
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

export const Form = styled.form`
  margin: 8% auto;
  width: 100%;
  background-color: papayawhip;
  width: 50%;
  /* padding: 1.3rem; */
  /* display: flex; */
  /* flex-direction: column; */
  /* position: relative; */
  /* align-items: center; */
  text-align: center;
  /* border: 2px solid black; */
  border-radius: 10%;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 600;
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;
  text-align: center;
  background-color: papayawhip;
`;

export const H2 = styled.h2`
  color: #fdfdfe;
  text-shadow: 0px 0px 5px #b393d3, 0px 0px 10px #b393d3, 0px 0px 10px #b393d3,
    0px 0px 20px #b393d3;
  text-align: center;
  background-color: papayawhip;
`;
