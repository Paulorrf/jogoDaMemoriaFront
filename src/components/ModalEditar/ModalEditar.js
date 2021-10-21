import React, { useState, useEffect, useRef } from "react";
import ReactDom from "react-dom";
import axios from "axios";

import {
  Background,
  OuterModal,
  FormDiv,
  BtnCancelDiv,
  ZerouDiv,
  LabelDiv,
} from "./ModalEditar.elements";
import { useHistory } from "react-router";

const ModalEditar = ({ setModalShow, showModal, backCartas, cartaID }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  let history = useHistory();

  const [editNome, setEditNome] = useState("");
  const [editFile, setEditFile] = useState("");

  const modalRef = useRef();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const onChangeFile = e => {
    setEditFile(e.target.files[0]);
  };

  const handleClick = e => {
    // e.preventDefault();
    // const formData = new FormData();
    // formData.append("nome", editNome);
    // //formData.append("cartaImage", editFile);
    // console.log(cartaID);
    // axios
    //   .put(`/cartas/update/${cartaID}`, formData)
    //   .then(res => console.log(res.data))
    //   .catch(error => console.log(error));
  };

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setModalShow(false);
    }
  };

  console.log(editFile);

  const modalEditarContent = showModal ? (
    <div>
      <Background onClick={closeModal} ref={modalRef}>
        <OuterModal>
          <h3 style={{ color: "red" }}>Não está funcionando</h3>
          {cartaID ? (
            <div>
              <form encType="multipart/form-data" onSubmit={handleClick}>
                <label htmlFor="name">Nome</label>
                <br />
                <input
                  type="text"
                  name="nome"
                  value={editNome}
                  placeholder="nome"
                  onChange={e => setEditNome(e.target.value)}
                />
                <br />

                <LabelDiv>
                  <label htmlFor="file">Choose imagem</label>
                  <input
                    type="file"
                    filename="cartaImage"
                    onChange={e => onChangeFile(e)}
                  />

                  <br />
                  <button type="submit">Editar</button>
                </LabelDiv>
              </form>
            </div>
          ) : null}
        </OuterModal>
      </Background>
    </div>
  ) : null;

  if (isBrowser) {
    return ReactDom.createPortal(
      modalEditarContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default ModalEditar;
