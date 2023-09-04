const data = require('./deckCards');

// Retorne em um array todas as cartas que possuem o atributo 'Dark';

const arrayAtributoDark = (object) => {
    const types = object.attributes.find((atributo) => {
        return atributo.name === 'Dark'
    });
    
    return cards = object.cards.filter((card) => {
        return card.attributeId === types.id;
    });
}

console.log(arrayAtributoDark(data));