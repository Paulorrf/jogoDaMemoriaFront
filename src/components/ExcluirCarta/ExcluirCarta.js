import React, { useState, useEffect } from "react";
import axios from "axios";

import api from "../../services/api.js";

import { ModalEditar } from "../index";

import { OuterDiv, Div, Aviso, Excluir } from "./ExcluirCarta.elements";

const EditCarta = () => {
  const [backCartas, setBackCartas] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [cartaID, setCartaID] = useState();
  const [naoExcluir, setNaoExcluir] = useState([
    "cabra",
    "cavalo",
    "coruja",
    "elefante",
    "galinha",
    "pantera",
    "porco",
    "tigre",
  ]);

  useEffect(() => {
    api
      .get("/cartas")
      .then(response => {
        setBackCartas(response.data);
        console.log(backCartas);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id, nome) => {
    if (naoExcluir.includes(nome)) {
      alert("Essa carta nao pode ser excluida por causa do diferencial.");
      return;
    } else if (backCartas.length > 18) {
      axios.delete(`/cartas/${id}`);
      console.log("excluiu carta");
      window.location.reload(false);
    } else {
      alert("O jogo precisa ter pelo menos 18 cartas.");
    }
  };

  const handleModal = cardID => {
    setModalShow(true);
    setCartaID(cardID);
  };

  console.log(backCartas);
  return (
    <>
      <ModalEditar
        setModalShow={setModalShow}
        showModal={modalShow}
        backCartas={backCartas}
        cartaID={cartaID}
      />
      <Aviso>
        <h3>
          Clique na carta para excluir(algumas cartas não podem ser excluidas
          por causa do diferencial)
        </h3>
      </Aviso>
      <OuterDiv>
        {backCartas?.map(carta => {
          return (
            <Div key={carta._id}>
              <img src={`../../uploads/${carta.imagem}`} alt={carta.nome} />
              <div>
                <Excluir
                  bg="darkred"
                  color="#e63946"
                  onClick={() => handleDelete(carta._id, carta.nome)}
                >
                  Excluir
                </Excluir>
                <Excluir
                  bg="blue"
                  color="#219ebc"
                  onClick={() => handleModal(carta._id)}
                >
                  Editar
                </Excluir>
              </div>
            </Div>
          );
        })}
      </OuterDiv>
    </>
  );
};

export default EditCarta;
