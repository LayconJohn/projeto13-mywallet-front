import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 25px;
    background: #8C11BE;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }
`;

const Topo = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  justify-content: space-between;
`;

const Titulo = styled.h3`
  color: #FFF;
  font-weight: bold;
  font-size: 26px;
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

const BotaoCadastro = styled.div`
  width: 155px;
  height: 114px;
  background-color: #A328D6;
  border-radius: 5px;
  opacity: 0.95;
  box-shadow: 1px 2px 2px black, 2px 3px 2px gray, 3px 4px 2px lightgray;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #FFF;
  padding: 11px 0px 0px 10px;
  margin-right: 15px;

  p {
    font-weight: bold;
    font-size: 17px;
    word-wrap: break-word;
    width: 64px;
  }
`;

const LinkRota = styled.p`
  font-weight: 700;
  font-size: 15px;
  color: #FFF;
`;

export {
  GlobalStyle, 
  Logo, 
  InputForm, 
  BotaoForm, 
  LinkRota,
  Topo,
  Titulo,
  BotaoCadastro,
};