import styled from "@emotion/styled";

const Texto = styled.div`
  background-color: #b7322c;
  color: #f5f5f5;
  padding: 10px;
  font-size: 16px;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  text-align: center;
`;
const Error = ({ children }) => {
  return <Texto>{children}</Texto>;
};

export default Error;
