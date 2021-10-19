import styled from "styled-components";
import img from "./img7.jpg";

export const Container = styled.div`
  background-image: url(${img});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const Header = styled.div`
  position: absolute;
  top: 3%;
  left: ${props => props.pos}%;
  transform: translate(-${props => props.pos}%, -3%);
  font-weight: bold;
  font-size: 20px;
  color: #000;
`;

export const BtnDesistir = styled.button`
  padding: 6px 10px;
  background-color: #219ebc;
  color: #ffffff;
  border-color: transparent;
  border-radius: 10px;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.colors.primary};
  }
`;

export const Tabul = styled.div`
  width: ${props => props.largura}px;
  height: 600px;
  margin: 0 auto;
  padding-top: 60px;
`;

export const TabuleiroCartas = styled.div`
  width: auto;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(${({ tamanho }) => tamanho}, 1fr);
  grid-template-rows: auto;
  text-align: center;
`;

export const CardsDiv = styled.div`
  position: relative;
  height: 100px;
  width: 70px;
`;

export const ImgDiv = styled.div`
  backface-visibility: hidden;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;
