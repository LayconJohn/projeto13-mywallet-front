import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #8C11BE;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`;
 
const Logo = styled.h1`
    font-family: 'Saira Stencil One', cursive;
    font-size: 32px;
    color: #FFF;
    text-align: center;
    font-weight: 400;
`

const InputForm = styled.input`
  width: 326px;
  height: 58px;
  background-color: #FFF;
  border-radius: 5px;
  padding-left: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  border: none;
`;

const BotaoForm = styled.button`
  width: 326px;
  height: 46px;
  background-color: #A328D6;
  color: #FFF;
  border-radius: 5px;
  text-align: center;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkRota = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: #FFF;
`;

export {GlobalStyle, Logo, InputForm, BotaoForm, LinkRota};