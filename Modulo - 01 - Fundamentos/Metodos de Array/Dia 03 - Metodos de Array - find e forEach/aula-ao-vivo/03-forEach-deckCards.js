const data = require('./deckCards');

// Faça a soma dos poderes de ataque de todos os monstros

const sumAtk = (array) => {
    let sum = 0;
    array.forEach((card) => {
        const { atk = 0 } = card;
        //if (atk) {
        //  sum += atk;
        //}
        sum += atk;
    });
    return sum;
}

console.log(sumAtk(data.cards));