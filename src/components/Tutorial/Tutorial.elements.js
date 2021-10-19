import styled from "styled-components";

import img1 from "./img4.jpg";

export const Div = styled.div`
  background-image: url(${img1});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const TutorialDiv = styled.div`
  width: 50%;
  height: 500px;
  //background-color: ${props => props.theme.colors.secondary};
  padding: 40px;
  text-align: center;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -20%);

  h2 {
    padding-bottom: 30px;
    letter-spacing: 1px;
    font-size: 2rem;
  }

  p {
    padding-bottom: 20px;
    font-size: 1.8rem;
  }
`;

export const BtnDiv = styled.div`
  position: absolute;
  bottom: -14%;
  left: 50%;
  transform: translateX(-50%);

  button {
    width: 8rem;
    height: 3rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0.5rem;
    border-color: transparent;
    color: #fff;
    font-size: 1.2rem;
    cursor: pointer;

    :hover {
      background-color: #219ebc;
    }
  }
`;

export const AdmDiv = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  opacity: 0;
`;
