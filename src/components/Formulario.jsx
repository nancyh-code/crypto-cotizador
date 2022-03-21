import React from "react";
import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data/monedas";

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
  const [SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);

  return (
    <form>
      <SelectMonedas />
      {/* <SelectCriptomonedas /> */}
      <InputSubmit type="submit" value="Cotizar" />
    </form>
  );
};

export default Formulario;
