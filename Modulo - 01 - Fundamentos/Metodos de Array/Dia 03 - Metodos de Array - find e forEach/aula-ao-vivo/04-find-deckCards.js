const data = require('./deckCards');

// Encontre o objeto que tem a carta do monstro com poder de defesa menor que 2000

const lowerDefense = (cards) => {
    return cards.find((card) => {
        return card.def < 2000;
    })
}
console.log(lowerDefense(data.cards));