import React from "react";
import styled from "styled-components";

// Componente estilizado para el componente Saludo
const StyledSaludo = styled.div`
  background-color: #00a2ff; 
  color: white; 
  padding: 20px;
`;

function Saludo(props) {
    return (
      <StyledSaludo>
        <h1>Hola {props.nombre}</h1>
      </StyledSaludo>
    );
}

export default Saludo;
  