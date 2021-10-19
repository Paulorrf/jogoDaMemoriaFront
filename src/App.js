import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "./GlobalStyle";

import Modal from "./components/Modal/Modal";

import {
  TelaInicial,
  Tutorial,
  TelaDificuldade,
  Tabuleiro,
  TelaAdm,
  Ranking,
  ExcluirCarta,
  CriarCarta,
  EditarCarta,
} from "./components/index";

const theme = {
  colors: {
    primary: "#023047",
    secondary: "#8ecae6",
    hover: "#219ebc",
  },
};

function App() {
  const [opcoes, setOpcoes] = useState({
    dificuldade: 2,
    gridQuebra: 2,
    largura: 400,
    tempo: 10,
    perdePontos: 5,
    ganhaPontos: 20,
  });

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <TelaInicial />
          </Route>
          <Route path="/ranking">
            <Ranking />
          </Route>
          <Route path="/excluir">
            <ExcluirCarta />
          </Route>
          <Route path="/criar">
            <CriarCarta />
          </Route>
          <Route path="/editar">
            <EditarCarta />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/dificuldade">
            <TelaDificuldade setOpcoes={setOpcoes} />
          </Route>
          <Route path="/tabuleiro">
            <Tabuleiro opcoes={opcoes} />
          </Route>
          <Route path="/telaAdmin">
            <TelaAdm />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
