//Exercício 1
//O array de objetos people, contêm elementos que representam pessoas com as propriedades name e age. Utilize o método filter para filtrar as pessoas que têm a idade igual ou superior a 30.

const people = [
  { name: 'João', age: 25 },
  { name: 'Maria', age: 30 },
  { name: 'Pedro', age: 20 },
  { name: 'Ana', age: 35 },
];

const idadesFiltradas = people.filter((idade) => idade.age >= 30);
console.log(idadesFiltradas);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 2
//Considere o seguinte array de objetos que representa uma lista de jogadores de basquete:

const players = [
  { name: 'Michael Jordan', height: 198, team: 'Chicago Bulls' },
  { name: 'LeBron James', height: 203, team: 'Los Angeles Lakers' },
  { name: 'Kobe Bryant', height: 198, team: 'Los Angeles Lakers' },
  { name: 'Stephen Curry', height: 191, team: 'Golden State Warriors' },
  { name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets' },
];

const filterHighPlayers = () => {
    const lista = players.filter(({height}) => height >= 200);
   console.log(lista)
}

filterHighPlayers();

//Utilizando o método filter e array destructuring, crie uma função filterHighPlayers que retorna um novo array contendo apenas os jogadores com altura igual ou superior a 200 centímetros. 

  //Dentro da função de callback passada para o filter, utilizamos o array destructuring para extrair a propriedade height de cada objeto jogador. Em seguida, comparamos o valor de height com 200 usando a expressão height >= 200. Se a condição for verdadeira, o jogador é incluído no novo array.

  //A função filterHighPlayers recebe o array players como argumento e retorna o novo array contendo apenas os jogadores com mais de 200 centímetros de altura.

  //const filterHighPlayers = (players) => {
  //  return players.filter(({ height }) => height >= 200);
  //};
  //console.log(filterHighPlayers(players));
  
  //const highPlayers = filterHighPlayers(players);
  //console.log(highPlayers);
  // [
  //   {name: 'LeBron James', height: 203, team: 'Los Angeles Lakers'},
  //   {name: 'Kevin Durant', height: 211, team: 'Brooklyn Nets'}
  // ]  

             