//Exercícios - agora, a prática
//Imagine que você tenha avançado para a próxima etapa de um processo seletivo: o desafio prático! Agora é o momento de demonstrar todas as suas habilidades em find, forEach e spread operator.

//Para realizar os exercícios de 1 a 3, utilize o array abaixo:

const countries = [
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  },
  {
    name: 'Brazil',
    region: 'Americas',
    currencies: [{ code: 'BRL', name: 'Brazilian Real' }],
    capital: 'Brasília',
    population: 213993437,
    area: 8515767
  },
  {
    name: 'Canada',
    region: 'Americas',
    currencies: [{ code: 'CAD', name: 'Canadian Dollar' }],
    capital: 'Ottawa',
    population: 38008005,
    area: 9976140
  },
  {
    name: 'China',
    region: 'Asia',
    currencies: [{ code: 'CNY', name: 'Chinese Yuan' }],
    capital: 'Beijing',
    population: 1439323776,
    area: 9640011
  },
  {
    name: 'France',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Paris',
    population: 67022000,
    area: 551695
  },
  {
    name: 'India',
    region: 'Asia',
    currencies: [{ code: 'INR', name: 'Indian Rupee' }],
    capital: 'New Delhi',
    population: 1393409038,
    area: 3287263
  },
  {
    name: 'Mexico',
    region: 'Americas',
    currencies: [{ code: 'MXN', name: 'Mexican Peso' }],
    capital: 'Mexico City',
    population: 126190788,
    area: 1964375
  },
  {
    name: 'Russia',
    region: 'Europe/Asia',
    currencies: [{ code: 'RUB', name: 'Russian Ruble' }],
    capital: 'Moscow',
    population: 146599183,
    area: 17098242
  },
  {
    name: 'South Africa',
    region: 'Africa',
    currencies: [{ code: 'ZAR', name: 'South African Rand' }],
    capital: 'Pretoria',
    population: 59308690,
    area: 1221037
  },
  {
    name: 'United States',
    region: 'Americas',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Washington, D.C.',
    population: 331449281,
    area: 9629091
  }
];

//Exercício 1
//Adicione a propriedade planet com o valor Earth em todos os países diretamente no array countries.
const addPlanet = (array) => {
    array.forEach((prop) => {
        return prop.planet = 'Earth'
    })
}
//console.log(addPlanet(countries));

////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 2
//Para cada país, crie um objeto apenas com as informação do nome, código da moeda e nome da moeda. Essas informações devem ser armazenadas em um novo array. Faça esse exercício usando o método forEach, não vale map. 😜

//Exemplo de como devem ser os objetos:

//{
//  name: 'United States',
//  currencyCode: 'USD',
//  currencyName: 'United States Dollar',
//}

const newCountries = (object) => {
    let countryInfoArray = [];
    object.forEach((obj) => {
        countryInfo = {
            name: obj.name,
            currencieCode: obj.currencies[0].code,
            currencieName: obj.currencies[0].name
        };
        countryInfoArray.push(countryInfo);
    });
    return countryInfoArray;
}
console.log(newCountries(countries));

///////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 3
//Escreva uma função chamada findCountry que recebe dois parâmetros: o array de países e o nome do país desejado. Ao receber esses valores, a função deve retornar o elemento do país desejado. Caso não seja encontrado, a função deve lançar um erro com a mensagem: “País não encontrado!”.

const findCountry = (countries, countryName) => {
  const result = countries.find((country) => country.name === countryName);
  if (!result) throw new Error('País não encontrado!');
  return result;
};
  
console.log(findCountry(countries, 'Brazil'));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////  

//Exercício 4
//Desenvolva uma função que crie uma cópia do array countries e adicione a Alemanha a esse novo array através do spread operator.

//const newCountry = {
//  name: 'Germany',
//  region: 'Europe',
//  currencies: [{ code: 'EUR', name: 'Euro' }],
//  capital: 'Berlin',
//  population: 83190556,
//  area: 357386
//};

//Exercício 5
//Desenvolva uma solução para percorrer o array countries e construir uma string para cada país com informações e formatação específicas. As propriedades são passadas como argumentos para a função buildString e adicionadas à string final. A string deverá ser construída com as propriedades name, capital, currencies.code e currencies.name separadas por um -.

//O resultado final deve ser:

//Anguilla - The Valley - XCD - East Caribbean dollar
//Brazil - Brasília - BRL - Brazilian Real
//Canada - Ottawa - CAD - Canadian Dollar
//China - Beijing - CNY - Chinese Yuan
//France - Paris - EUR - Euro
//India - New Delhi - INR - Indian Rupee
//Mexico - Mexico City - MXN - Mexican Peso
//Russia - Moscow - RUB - Russian Ruble
//South Africa - Pretoria - ZAR - South African Rand
//United States - Washington -  D.C. - USD - United States Dollar

const buildString = (countries, name, ...properties) => {
    const result = countries.find((country) => country.name === name);
    //console.log(properties)
    return `${result.name} - ${properties}`;
  };
  
countries.forEach((country) => {
  const string = buildString(countries, country.name, country.capital, country.currencies[0].code, country.currencies[0].name);
  console.log(string.split(',').join(' - '));
});