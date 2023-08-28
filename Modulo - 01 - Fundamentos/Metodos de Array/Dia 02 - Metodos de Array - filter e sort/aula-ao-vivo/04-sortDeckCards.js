const data = require("./deckCards");

// Ordenar o array data.cards, Pelo nome dos monstros
const compare = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

const sortObjectMonster = (data) => data.cards.sort(compare);
//console.log(sortObjectMonster(data));

///////////////////////////////////////////////////////////////////////////

// Gerar um array com os nomes dos monstros, em ordem alfabética
const monsterName = () => {
    const gerarArray = data.cards.map(({name}) => name).sort();
    return gerarArray;
}
//
console.log(monsterName(data));

//const monsterName = () => data.cards.map(({ name }) => name).sort();
//console.log(monsterName(data));
