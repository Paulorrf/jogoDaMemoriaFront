import React from "react";
import { Link } from "react-router-dom";

import { Div, Container, Btn } from "./TelaDificuldade.elements";

const TelaDificuldade = ({ setOpcoes }) => {
  return (
    <Div>
      <Container>
        <Link
          to="/tabuleiro"
          onClick={() =>
            setOpcoes({
              dificuldade: 2,
              gridQuebra: 2,
              largura: 400,
              tempo: 10,
              perdePontos: 5,
              ganhaPontos: 20,
            })
          }
        >
          <Btn color="green">Fácil</Btn>
        </Link>

        <Link
          to="/tabuleiro"
          onClick={() =>
            setOpcoes({
              dificuldade: 8,
              gridQuebra: 4,
              largura: 600,
              tempo: 45,
              perdePontos: 10,
              ganhaPontos: 40,
            })
          }
        >
          <Btn color="yellow">Médio</Btn>
        </Link>

        <Link
          to="/tabuleiro"
          onClick={() =>
            setOpcoes({
              dificuldade: 18,
              gridQuebra: 9,
              largura: 1000,
              tempo: 90,
              perdePontos: 20,
              ganhaPontos: 150,
            })
          }
        >
          <Btn color="red">Dificil</Btn>
        </Link>
      </Container>
    </Div>
  );
};

export default TelaDificuldade;
