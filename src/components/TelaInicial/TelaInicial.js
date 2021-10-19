import React from "react";
import { Link } from "react-router-dom";

import { Div, BtnDiv, Btn, TutDiv } from "./TelaInicial.elements";

const TelaInicial = () => {
  return (
    <Div>
      <BtnDiv>
        <Link to="/dificuldade">
          <Btn>JOGAR</Btn>
        </Link>

        <Link to="/ranking">
          <Btn>RANKING</Btn>
        </Link>
      </BtnDiv>

      <TutDiv>
        <Link to="/tutorial">
          <Btn>TUTORIAL</Btn>
        </Link>
      </TutDiv>
    </Div>
  );
};

export default TelaInicial;
