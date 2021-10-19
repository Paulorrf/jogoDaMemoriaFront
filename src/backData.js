import axios from "axios";

let cards = [];

async function fetchData() {
  let response = await axios.get("/cartas");
  console.log(response);
  return response.data;
  //setCartasBack(response.data);
}
cards = fetchData();

// let newCards = cards.map(card => {
//   return { nome: card.nome, imagem: card.imagem };
// });

export default cards;
