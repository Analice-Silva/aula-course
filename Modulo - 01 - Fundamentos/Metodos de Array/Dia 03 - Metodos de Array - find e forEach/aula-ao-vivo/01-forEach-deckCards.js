const data = require("./deckCards.js");

/* Mostre os poderes de ataque e defesa de cada carta, no seguinte formato:
{
    name: 'Blue-Eyes White Dragon',
    atk: 3000,
    def: 2500,
}
*/

const getMonsterObject = (arrayCards) => {
  arrayCards.forEach((element) => {
    //const name = element.name;
    //const atk = element.atk;
    //const def = element.def;
    const { name, atk, def} = element
    console.log({ name, atk, def });
  });
};

console.log(getMonsterObject(data.cards));
