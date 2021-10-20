import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import axios from "axios";
import api from "../../services/api.js";

import {
  Background,
  OuterModal,
  FormDiv,
  BtnCancelDiv,
  ZerouDiv,
} from "./Modal.elements";
import { useHistory } from "react-router";

const Modal = ({
  showModal,
  setShowModal,
  maiorPontuacao,
  dificuldade,
  pontuacaoZerou,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);

  let history = useHistory();

  const [userName, setUserName] = useState("");
  const [dificul, setDificul] = useState("");

  useEffect(() => {
    if (dificuldade === 2) {
      setDificul("facil");
    } else if (dificuldade === 8) {
      setDificul("medio");
    } else {
      setDificul("dificil");
    }
  }, []);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  useEffect(() => {
    if (maiorPontuacao === 0) {
      //setPontuacaoZerou(prev => (prev = true));
    }
    console.log("entrou zero");
  }, []);

  const handleClick = e => {
    e.preventDefault();

    const user = {
      userName,
      pontuacao: maiorPontuacao,
      dificuldade: dificul,
    };

    api
      .post("/users/addUser", user)
      .then(res => {
        console.log(res.data);
        history.push("/");
      })
      .catch(error => console.log(error));
  };

  const handleSair = () => {
    history.push("/");
  };

  //console.log(maiorPontuacao);

  const modalContent = showModal ? (
    <div>
      <Background>
        <OuterModal>
          {pontuacaoZerou ? (
            <ZerouDiv>
              <h2>Você não fez nenhum ponto</h2>
              <button onClick={handleSair}>Sair</button>
            </ZerouDiv>
          ) : (
            <div>
              <FormDiv>
                <form onSubmit={handleClick}>
                  <label htmlFor="name">Nome no ranking</label>

                  <input
                    type="text"
                    name="nome"
                    value={userName}
                    placeholder="nome"
                    onChange={e => setUserName(e.target.value)}
                  />

                  <div>
                    <h3>Sua maior pontuação: {maiorPontuacao}</h3>
                  </div>

                  <button type="submit">Registrar</button>
                </form>
              </FormDiv>
              <BtnCancelDiv>
                <p>Não registrar</p>
                <button onClick={handleSair}>Sair</button>
              </BtnCancelDiv>
            </div>
          )}
        </OuterModal>
      </Background>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;
