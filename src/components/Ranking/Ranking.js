import React, { useState, useEffect } from "react";
import axios from "axios";

import { RankingDiv, BtnDiv, Display } from "./Ranking.elements";

const Ranking = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mostrarDificuldade, setMostrarDificuldade] = useState("facil");

  useEffect(() => {
    axios
      .get("/users")
      .then(response => {
        setUsuarios(
          response.data.filter(user => user.dificuldade === mostrarDificuldade)
        );
        setUsuarios(prev => prev.sort((a, b) => b.pontuacao - a.pontuacao));
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [mostrarDificuldade]);

  console.log(usuarios);
  return (
    <RankingDiv>
      <h3>Escolha uma dificuldade para mostrar</h3>
      <div>
        <BtnDiv>
          <button onClick={() => setMostrarDificuldade("facil")}>Facil</button>
          <button onClick={() => setMostrarDificuldade("medio")}>Medio</button>
          <button onClick={() => setMostrarDificuldade("dificil")}>
            Dificil
          </button>
        </BtnDiv>
        {
          <div>
            {loading ? (
              <p>Carregando</p>
            ) : (
              <Display>
                <div>
                  <h3>Nome</h3>
                  {usuarios.map((user, index) => (
                    <p key={index}>{user.userName}</p>
                  ))}
                </div>
                <div>
                  <h3>Pontuação</h3>
                  {usuarios.map((user, index) => (
                    <p key={index}>{user.pontuacao}</p>
                  ))}
                </div>
              </Display>
            )}
          </div>
        }
      </div>
    </RankingDiv>
  );
};

export default Ranking;
