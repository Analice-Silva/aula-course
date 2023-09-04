const data = require('./deckCards');

// Encontrar a carta de 'Arianna the Labrynth Servant' e adicionar a ela a seguinte propriedade: 
// feature: ['game', 'monster'];

const addFeature = (arrayCards, ...arrayFeature) => {
    const findCard = arrayCards.find((card) => {
        return card.name === 'Arianna the Labrynth Servant';
    });

    findCard.feature = arrayFeature;
    return findCard;
}
console.log(addFeature(data.cards, {jogo: 'game', bicho: 'monster'}))