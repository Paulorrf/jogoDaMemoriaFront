import React from "react";
import { Link } from "react-router-dom";

import { AdmDiv, BtnDiv } from "./TelaAdm.elements.js";

const TelaAdm = () => {
  return (
    <AdmDiv>
      <h2>Tela Admin</h2>
      <BtnDiv>
        <Link to="/criar">Criar</Link>
        <Link to="/excluir">Editar/Excluir</Link>
      </BtnDiv>
    </AdmDiv>
  );
};

export default TelaAdm;
