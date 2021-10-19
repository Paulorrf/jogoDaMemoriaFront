import React, { useState } from "react";
import axios from "axios";

import { ContainerDiv, Div, FormDiv, Sucesso } from "./CriarCarta.elements";

const CriarCarta = () => {
  const [nome, setNome] = useState("");
  const [sucesso, setSucesso] = useState("");
  const [fileName, setFileName] = useState("");

  const onChangeFile = e => {
    setFileName(e.target.files[0]);
  };

  const handleClick = e => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("nome", nome);
    formData.append("cartaImage", fileName);

    setNome("");

    axios
      .post("/cartas/add", formData)
      .then(res => {
        console.log(res.data);
        setSucesso("Carta Adicionada");
        setTimeout(() => setSucesso(""), 2000);
      })
      .catch(error => console.log(error));
  };

  return (
    <ContainerDiv>
      <Div>
        <h2>Criar Carta</h2>
        <Sucesso>{sucesso}</Sucesso>
        <FormDiv>
          <form encType="multipart/form-data" onSubmit={handleClick}>
            <label htmlFor="name">Nome</label>
            <br />
            <input
              type="text"
              name="nome"
              value={nome}
              placeholder="nome"
              onChange={e => setNome(e.target.value)}
            />
            <br />

            <label htmlFor="file">Choose imagem</label>
            <input
              type="file"
              filename="cartaImage"
              onChange={e => onChangeFile(e)}
            />

            <br />
            <button type="submit">Criar</button>
          </form>
        </FormDiv>
      </Div>
    </ContainerDiv>
  );
};

export default CriarCarta;