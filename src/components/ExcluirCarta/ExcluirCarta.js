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
  //const [load, setLoad] = useState(false);

  useEffect(() => {
    api
      .get("/cartas")
      .then(response => {
        setBackCartas(response.data);
        //setLoad(true);
        console.log(backCartas);
      })
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (id, nameCarta) => {
    if (naoExcluir.includes(nameCarta)) {
      return;
    } else if (backCartas.length > 18) {
      //axios.delete(`/cartas/${id}`);
      console.log("excluiu carta");
    }
  };

  const handleModal = cardID => {
    setModalShow(true);
    setCartaID(cardID);
  };

  console.log(backCartas);

  // <Div onClick={() => handleExcluir(carta._id)}>
  return (
    <>
      <ModalEditar
        setModalShow={setModalShow}
        showModal={modalShow}
        backCartas={backCartas}
        cartaID={cartaID}
      />
      <Aviso>
        <h3>Clique na carta para excluir</h3>
      </Aviso>
      <OuterDiv>
        {backCartas?.map(carta => {
          return (
            <Div key={carta._id}>
              <img src={`../../uploads/${carta.imagem}`} alt={carta.nome} />
              <div>
                <Excluir color="red" onClick={() => handleDelete(carta._id)}>
                  Excluir
                </Excluir>
                <Excluir
                  color="blue"
                  onClick={() => handleModal(carta._id, carta.nome)}
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
