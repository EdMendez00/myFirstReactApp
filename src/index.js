import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MiComponente from './myComponent';
import Saludo from './Saludo';
import Contador from './Contador';
import { createGlobalStyle } from 'styled-components';


// Componente de estilo global
const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e2e2e2; 
    color: black; 
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <MiComponente />

    <Saludo nombre="Juan" />
    
    <Contador />
  </React.StrictMode>,
  document.getElementById('root')
  
);