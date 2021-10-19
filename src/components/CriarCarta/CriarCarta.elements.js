import styled from "styled-components";

import img1 from "./img5.jpg";

export const ContainerDiv = styled.div`
  background-image: url(${img1});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Div = styled.div`
  width: 50%;
  height: 500px;
  //background-color: ${props => props.theme.colors.secondary};
  padding: 40px;
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormDiv = styled.div`
  width: 240px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    input {
      margin-bottom: 14px;
    }
  }

  button {
    padding: 6px 16px;
    background-color: ${props => props.theme.colors.primary};
    color: #ffffff;
    border-color: transparent;
    cursor: pointer;
    border-radius: 0.5rem;

    :hover {
      background-color: #219ebc;
    }
  }
`;

export const Sucesso = styled.h2`
  color: green;
`;
