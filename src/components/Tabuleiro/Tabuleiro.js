import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import api from "../../services/api.js";

import CartaBack from "./carta-back.png";

import dataSound from "../../animaisSons.js";

import { Modal } from "../index";

import {
  Container,
  Header,
  BtnDesistir,
  Tabul,
  TabuleiroCartas,
  CardsDiv,
  ImgDiv,
} from "./Tabuleiro.elements";

//import data from "../../animais";

const embaralhar = (dificuldade, arrCards) => {
  let cartasArr = [];
  arrCards = arrCards.sort(() => Math.random() - 0.5);

  //Adiciona o número de cartas equivalente a dificuldade
  for (let i = 0; i < dificuldade; i++) {
    cartasArr.push(arrCards[i]);
  }

  //Dobra o numero de cartas no array para ter os pares
  cartasArr = cartasArr.concat(cartasArr);

  //Organiza de forma aleatória os pares
  cartasArr = cartasArr.sort(() => Math.random() - 0.5);
  return cartasArr;
};

const Tabuleiro = ({ opcoes }) => {
  //Executa a função embaralhar e atribui o valor a variavel de estado "cartas"
  const [cartas, setCartas] = useState([]);

  //Array das cartas que foram clicadas
  const [openCards, setOpenCards] = useState([]);

  //Array dos pares que foram acertados
  const [clearedCards, setClearedCards] = useState([]);

  const [pontuacao, setPontuacao] = useState(0);
  const [maiorPontuacao, setMaiorPontuacao] = useState(0);

  const [acertou, setAcertou] = useState(false);

  const [timer, setTimer] = useState(opcoes.tempo);
  const [timerZerou, setTimerZerou] = useState(false);

  const [gameOver, setGameOver] = useState(false);

  const [isClicked, setIsClicked] = useState(true);

  const [showModal, setShowModal] = useState(false);

  const [cartasDoBack, setCartasDoBack] = useState([]);
  const [carregou, setCarregou] = useState(false);

  const [pontuacaoZerou, setPontuacaoZerou] = useState(false);

  const [fases, setFases] = useState(1);

  const [diferencial, setDiferencial] = useState(false);
  const [diferencialArr, setDiferencialArr] = useState([
    "cabra",
    "cavalo",
    "coruja",
    "elefante",
    "galinha",
    "pantera",
    "porco",
    "tigre",
  ]);

  const [difArrTemp, setDifArrTemp] = useState([]);

  const interval = useRef();

  //Adiciona carta clicada no array para poder validar
  const handleClick = (index, e) => {
    setOpenCards(prev => [...prev, index]);

    //console.log(e);

    //Arrumar bug do double click
    if (e.detail === 1) {
      //setIsClicked(false);
      //console.log("entrou detail");
      //setTimeout(() => setIsClicked(true), 200);
    }
  };

  useEffect(() => {
    api
      .get("/cartas")
      .then(response => {
        setCartasDoBack(response.data);
        setCartas(embaralhar(opcoes.dificuldade, response.data));
        setCarregou(prev => (prev = true));
      })
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    setTimer(opcoes.tempo);
    if (diferencial) setTimer(45);
  }, [diferencial]);

  //Quando jogo acabar por tempo
  useEffect(() => {
    if (timer === 0 && pontuacao === 0) {
      setGameOver(true);
      clearInterval(interval.current);
      if (maiorPontuacao === 0) setPontuacaoZerou(true);
      setShowModal(prev => !prev);
    } else if (timer === 0 && gameOver === false) {
      let qntAcertos = cartas.length / 2 - clearedCards.length;
      if (diferencial) {
        setPontuacao(prev => prev - 10);
      } else {
        setPontuacao(prev => prev - qntAcertos * opcoes.perdePontos);
      }
      reset();
      setFases(prev => prev + 1);
      clearInterval(interval.current);
      setAcertou(true);
      setTimerZerou(false);
    }
  }, [timerZerou]);

  //Controla o relógio/timer
  useEffect(() => {
    let tempo = timer;
    if (diferencial) {
      tempo = 45;
      setTimer(45);
    }
    if (gameOver === false) {
      if (tempo > 0) {
        interval.current = setInterval(() => {
          setTimer(prev => prev - 1);
          tempo--;
          if (tempo === 0) {
            setTimerZerou(true);
          }
          if (acertou === true) {
            setAcertou(false);
            clearInterval(interval.current);
          }
        }, 1000);
      }
    }
  }, [acertou, gameOver]);

  useEffect(() => {
    if (fases === 4) {
      setDifArrTemp(embaralhar(8, diferencialArr));
      setDiferencial(true);
      setFases(1);
      setTimer(45);
    }
  }, [fases]);

  if (pontuacao > maiorPontuacao) {
    setMaiorPontuacao(pontuacao);
    setPontuacaoZerou(false);
  }

  function reset() {
    setClearedCards([]);
    if (diferencial) {
      setTimer(45);
      setDiferencial(false);
    } else {
      setTimer(opcoes.tempo);
    }
    if (carregou) setCartas(embaralhar(opcoes.dificuldade, cartasDoBack));
    setOpenCards([]);
    setIsClicked(true);
  }

  useEffect(() => {
    //acertou tudo antes do tempo acabar
    if (diferencial) {
      if (
        timer > 0 &&
        clearedCards.length === difArrTemp.length / 2 &&
        carregou
      ) {
        setTimer(opcoes.tempo);
        setDiferencial(false);
        setAcertou(true);
        clearInterval(interval.current);
        setPontuacao(prev => prev + opcoes.ganhaPontos);
        setFases(prev => prev + 1);

        //vai para a proxima fase
        setTimeout(() => {
          reset();
        }, 800);
      }
    } else if (
      timer > 0 &&
      clearedCards.length === cartas.length / 2 &&
      carregou
    ) {
      setAcertou(true);
      clearInterval(interval.current);
      setPontuacao(prev => prev + opcoes.ganhaPontos);
      setFases(prev => prev + 1);

      //vai para a proxima fase
      setTimeout(() => {
        reset();
      }, 800);
    }
  }, [clearedCards]);

  //Quando duas cartas são clicadas, verifica se é par, se não for zera o array e fecha as cartas
  if (openCards.length === 2) {
    const [first, second] = openCards;
    if (diferencial) {
      if (difArrTemp[first] === difArrTemp[second]) {
        setClearedCards(prev => [...prev, difArrTemp[first]]);
        setOpenCards([]);
      } else {
        setOpenCards([]);
      }
    } else if (cartas[first].nome === cartas[second].nome) {
      setClearedCards(prev => [...prev, cartas[first].nome]);
      setOpenCards([]);
      return;
    } else {
      //0.8 segundos pra carta desvirar
      setTimeout(() => setOpenCards([]), 800);
    }
  }

  //Pausa o relogio
  function handleDesistir() {
    if (pontuacao === 0 && maiorPontuacao === 0) {
      setPontuacaoZerou(true);
    }
    setGameOver(true);
    clearInterval(interval.current);
    setShowModal(prev => !prev);
  }

  return (
    <Container>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        maiorPontuacao={maiorPontuacao}
        dificuldade={opcoes.dificuldade}
        pontuacaoZerou={pontuacaoZerou}
      />
      <Header pos={60}>Tempo: {timer}</Header>
      <Header pos={30}>
        {gameOver
          ? `Maior Pontuação: ${maiorPontuacao}`
          : `Pontuação: ${pontuacao}`}
      </Header>
      <Header pos={47} style={{ color: "red" }}>
        {diferencial ? "Fase bônus" : null}
      </Header>
      <Header pos={74}>
        <BtnDesistir onClick={() => handleDesistir()}>DESISTIR</BtnDesistir>
      </Header>

      <Tabul largura={opcoes.largura}>
        <TabuleiroCartas tamanho={diferencial ? 4 : opcoes.gridQuebra}>
          {diferencial ? (
            diferencial ? (
              difArrTemp.map((animal, index) => {
                let virarCarta;
                virarCarta = false;
                for (let i = 0; i < 8; i++) {
                  if (animal === dataSound[i].nome) {
                    var audio = new Audio(dataSound[i].sound);
                    break;
                  }
                }

                if (clearedCards.includes(animal)) {
                  virarCarta = true;
                }

                return (
                  <CardsDiv
                    key={index}
                    onClick={isClicked ? e => handleClick(index, e) : null}
                  >
                    {virarCarta ? (
                      <ImgDiv>
                        <img src={`../../uploads/${animal}.jpg`} alt={animal} />
                      </ImgDiv>
                    ) : (
                      <ImgDiv>
                        <img
                          src={CartaBack}
                          onClick={() => audio.play()}
                          alt="verso"
                        />
                      </ImgDiv>
                    )}
                  </CardsDiv>
                );
              })
            ) : null
          ) : carregou ? (
            cartas.map((carta, index) => {
              let virarCarta;
              let clicou = true;
              virarCarta = false;

              //Verifica se a carta clicada está no array
              if (openCards.includes(index)) virarCarta = true;

              //Deixa a carta que foi achado o par virada para cima
              if (clearedCards.includes(carta.nome)) virarCarta = true;

              if (openCards.includes(index)) {
                //setIsClicked(false);
                clicou = false;
              }

              return (
                <CardsDiv
                  key={index}
                  onClick={clicou ? e => handleClick(index, e) : null}
                >
                  {virarCarta ? (
                    <ImgDiv>
                      <img
                        src={`../../uploads/${carta.imagem}`}
                        alt="imagem animal"
                      />
                    </ImgDiv>
                  ) : (
                    <ImgDiv>
                      <img src={CartaBack} alt="verso" />
                    </ImgDiv>
                  )}
                </CardsDiv>
              );
            })
          ) : (
            <div>Carregando</div>
          )}
        </TabuleiroCartas>
      </Tabul>
    </Container>
  );
};

export default Tabuleiro;
