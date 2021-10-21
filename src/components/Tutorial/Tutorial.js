import React from "react";
import { Link } from "react-router-dom";

import { Div, TutorialDiv, BtnDiv, AdmDiv } from "./Tutorial.elements";

const Tutorial = () => {
  return (
    <Div>
      <TutorialDiv>
        <h2>Regras</h2>
        <p>
          O jogo possui 3 dificuldades, na dificuldade fácil o tabuleiro será de
          2x2 e você terá 10 segundos para adivinhar os pares, na dificuldade
          média o tabuleiro será 4x4 e você terá 45 segundos para adivinhar os
          pares e na dificuldade dificil o tabuleiro será 6x6 e você terá 1 min
          e 30 segundos para adivinhar os pares.
        </p>
        <p>
          A fase bônus ocorre a cada 3 fases normais e possui 8 pares em todas
          as dificuldade e você terá que adivinhar os pares com base no som
          dentro de 45 segundos.
        </p>

        <BtnDiv>
          <Link to="/">
            <button>VOLTAR</button>
          </Link>
        </BtnDiv>
      </TutorialDiv>

      <AdmDiv>
        <Link to="/telaAdmin">
          <button>acessar</button>
        </Link>
      </AdmDiv>
    </Div>
  );
};

export default Tutorial;
