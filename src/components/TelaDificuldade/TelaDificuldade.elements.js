import styled from "styled-components";
import img1 from "./img1.jpg";

export const Div = styled.div`
  background-image: url(${img1});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Container = styled.div`
  width: 32rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
`;

export const Btn = styled.button`
  width: 8rem;
  height: 3rem;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 0.5rem;
  border-color: transparent;
  color: #000;
  font-size: 1.2rem;
  cursor: pointer;

  :hover {
    background-color: ${props => props.color};
  }
`;
