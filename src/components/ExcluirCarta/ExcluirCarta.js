import React, { useState, useEffect } from "react";
import axios from "axios";

import { ModalEditar } from "../index";

import { OuterDiv, Div, Aviso } from "./ExcluirCarta.elements";

const EditCarta = () => {
  const [backCartas, setBackCartas] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [cartaID, setCartaID] = useState();
  //const [load, setLoad] = useState(false);

  useEffect(() => {
    axios
      .get("/cartas")
      .then(response => {
        setBackCartas(response.data);
        //setLoad(true);
        console.log(backCartas);
      })
      .catch(error => console.log(error));
  }, []);

  const handleModal = cardID => {
    //console.log(id);
    // axios.delete(`/cartas/${id}`);
    // console.log("deletou");
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
                <div>Excluir</div>
                <div onClick={() => handleModal(carta._id)}>Editar</div>
              </div>
            </Div>
          );
        })}
      </OuterDiv>
    </>
  );
};

export default EditCarta;
