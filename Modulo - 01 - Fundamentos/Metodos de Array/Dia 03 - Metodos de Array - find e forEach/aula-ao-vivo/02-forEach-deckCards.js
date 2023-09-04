const data = require("./deckCards");

// 1-Adicione em cada carta a propriedade 'game: Yu Gi Oh'
const addProperty = (arrayCards) => {
  arrayCards.forEach((card) => {
    card.game = "Yu Gi Oh";
  });
  return arrayCards;
};
//console.log(addProperty(data.cards));

// 2-Mostre apenas os objetos do tipo 2.
const filterProperty = (arrayCards) => {
  arrayCards.forEach((card) => {
    card.id === 2;
  });
  return arrayCards.filter((object) => {
    return object.typeId === 2;
  });
};
//console.log(filterProperty(data.cards));

// 3-Apresente este resultado em um array no formato:
//{
//    name: 'Dark Magician',
//    typeId: 2,
//    game: 'Yu Gi Oh'
//}

const mapProperty = (arrayCards) => {
  arrayCards.forEach((card) => {
    card.game = "Yu Gi Oh";
  });
  return arrayCards
    .filter((object) => {
      return object.typeId === 2;
    })
    .map((result) => {
      const { name, typeId, game } = result;
      return {
        name,
        typeId,
        game,
      };
    });
};
console.log(mapProperty(data.cards));
