const data = require('./deckCards');

// Retorne os 3 primeiros objetos do array cards, em um novo array.
const threeObjects = (objCard1, objCard2, objCard3) => {
    return [objCard1, objCard2, objCard3];
}
//console.log(threeObjects(...data.cards));


// Retorne os objetos do array cards, em um novo array, a partir do quan
const restObject = (objCard1, objCard2, objCard, ...newCards) => {
    return newCards;
}
console.log(restObject(...data.cards))