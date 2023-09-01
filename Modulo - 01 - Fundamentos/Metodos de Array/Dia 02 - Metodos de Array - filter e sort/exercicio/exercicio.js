//Considere o seguinte array de objetos que representa uma lista de Pokémons para os exercícios à seguir:
const pokemons = [
  { name: 'Pikachu', type: 'Elétrico', level: 25 },
  { name: 'Charizard', type: 'Fogo', level: 50 },
  { name: 'Bulbasaur', type: 'Planta', level: 10 },
  { name: 'Gyarados', type: 'Água', level: 40 },
  { name: 'Alakazam', type: 'Psíquico', level: 35 },
  { name: 'Snorlax', type: 'Normal', level: 50 },
  { name: 'Mewtwo', type: 'Psíquico', level: 70 },
  { name: 'Dragonite', type: 'Dragão', level: 55 },
  { name: 'Mew', type: 'Psíquico', level: 30 },
  { name: 'Articuno', type: 'Gelo', level: 60 },
  { name: 'Zapdos', type: 'Elétrico', level: 60 },
  { name: 'Moltres', type: 'Fogo', level: 60 },
  { name: 'Gengar', type: 'Fantasma', level: 45 },
  { name: 'Machamp', type: 'Lutador', level: 50 },
  { name: 'Lapras', type: 'Água', level: 35 },
  { name: 'Venusaur', type: 'Planta', level: 45 },
  { name: 'Blastoise', type: 'Água', level: 55 },
  { name: 'Golem', type: 'Pedra', level: 40 },
  { name: 'Arcanine', type: 'Fogo', level: 55 },
  { name: 'Jolteon', type: 'Elétrico', level: 40 },
];

//Exercício 1
//Utilizando o método filter e object destructuring, crie uma função filterStrongPokemons que retorna um novo array contendo apenas os Pokémons com nível superior a 30.
const filterStrongPokemons = (pokemon) => pokemon.filter(({level}) => level > 30);
//console.log(filterStrongPokemons(pokemons));

//Exercício 2
//Utilizando os métodos filter e map encadeados, crie uma função getStrongPokemonNames que retorna um novo array contendo apenas os nomes dos Pokémons com nível superior a 50.
const getStrongPokemonNames = (pokes) => {
    const filtrandoPokes = pokes.filter((poke) => poke.level > 50).map(({ name}) => ({name}));
    return filtrandoPokes;
} 
//console.log(getStrongPokemonNames(pokemons));

//Exercício 3
//Utilize o método sort para ordenar o array de Pokémons em ordem crescente com base no nível de cada Pokémon.
const getStrongPokemonSort = (ordem) => ordem.sort((a, b) => a.level - b.level);
//console.log(getStrongPokemonSort(pokemons));

//Exercício 4
//Utilizando o método sort e default destructuring, crie uma função chamada sortPokemons que retorna o array de Pokémons ordenado por nível em ordem decrescente. Caso dois Pokémons tenham o mesmo nível, a ordenação deve ser feita pelo nome em ordem alfabética crescente.
//const sortPokemons = (ordenando) => {
//    const ordem = ordenando.sort((a, b) => {
//        if (b.level === a.level) {
//            return b.level.localeCompare(a.level);
//        }
//        return b.level - a.level;
//    });
//    return ordem;
//}
//console.log(sortPokemons(pokemons));
//

const sortPokemons = (ordenando) => {
    const ordem = ordenando.sort((a, b) => {
        if (b.level === a.level) {
            return a.name.localeCompare(b.name); // Ordem alfabética crescente pelo nome
        }
        return b.level - a.level; // Ordem decrescente pelo nível
    });
    return ordem;
}
console.log(sortPokemons(pokemons));

//De olho na dica 👀: Dê uma olhadinha na documentação do método localeCompare, pode te ajudar na hora de desempatar por nome. 😉

 