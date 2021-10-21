import styled from "styled-components";

export const Aviso = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  color: red;
`;

export const OuterDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: honeydew;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  padding: 30px;
`;

export const Div = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
  display: flex;

  img {
    width: 100px;
    height: 100px;
  }
`;

export const Excluir = styled.div`
  width: 80px;
  background-color: ${props => props.color};
  padding: 2px;
  text-align: center;
  margin-bottom: 10px;
  margin-left: 2px;
  color: #fff;
`;
