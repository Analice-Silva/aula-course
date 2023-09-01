//1. Transforme (Mapeie) o array de objetos cities em um array de strings com seguinte formato:
//a) "${nomeDaCidade} - ${siglaDoEstado}"

const cities = [
  { state: "AM", name: "Manaus", region: "N" },
  { state: "PA", name: "Belém", region: "N" },
  { state: "TO", name: "Porto Nacional", region: "N" },
  { state: "MG", name: "Lavras", region: "SE" },
  { state: "BA", name: "Feira de Santana", region: "NE" },
  { state: "PR", name: "Cascavel", region: "S" },
  { state: "SP", name: "Presidente Prudente", region: "SE" },
  { state: "RN", name: "Touros", region: "NE" },
  { state: "CE", name: "Jericoacoara", region: "NE" },
];

const citiesComFor = (arrayCities) => {
  const myArray = [];
  for (let state of arrayCities) {
    myArray.push(`${state.name} - ${state.state}`);
  }
  return myArray;
};

//console.log(citiesComFor(cities));

//const citiesComMap = (arrayCitiesMap) => {
//  return arrayCitiesMap.map((arrayCitie) => {
//    return `${arrayCitie.name} - ${arrayCitie.state}`;
//  });
//}
//
//console.log(citiesComMap(cities));

//Refatorando 
const citiesComMap = (arrayCitiesMap) =>
  arrayCitiesMap.map(
    (arrayCitie) => `${arrayCitie.name} - ${arrayCitie.state}`
  );
console.log(citiesComMap(cities));
