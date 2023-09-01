const data = require('./deckCards');

// Encontrar todas as cartas de um determinado tipo
//const getDragons = (cartas, id) => {
//    return cartas.cards.filter((carta) => carta.typeId === id);
//};
//console.log(getDragons(data, 2));

const getDragons = (cartas, id) => cartas.cards.filter((carta) => carta.typeId === id);
//console.log(getDragons(data, 2));

//ARRAY DESTRUCTURING;
const [object1, object2] = data.cards;
console.log(object1);
console.log(object2);

//OBJECT DESTRUCTURING;
const { id: qualquerCoisa, name, typedId, attributeId, atk, def, img, description } = data.cards[0];
//console.log(qualquerCoisa, name);

//Object.keys // entries // values;
