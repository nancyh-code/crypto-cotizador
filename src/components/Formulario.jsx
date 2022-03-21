import React from "react";
import styled from "@emotion/styled";

const InputSubmit = styled.input`
  background-color: #fbae56;
  border: none;
  width: 100%;
  padding: 10px;
  color: #2a2a2b;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #fc9b2d;
    cursor: pointer;
  }
`;

const Formulario = () => {
  return (
    <form>
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
