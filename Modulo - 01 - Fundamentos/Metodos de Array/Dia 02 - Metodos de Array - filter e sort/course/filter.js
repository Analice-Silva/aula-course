//O método filter é uma HoF que permite filtrar elementos de um array com base em um critério definido por uma função de callback.
//Imagine que você tenha ficado responsável por um sistema de cadastro de clientes de uma loja de roupas e precise apenas dos nomes. Ao salvar o cadastro, o nome e o número do telefone foram salvos dentro de um mesmo array.
//O código abaixo mostra como ficou o resultado do array:

const data = ['André', 998812789, 'Gabriel', 995794897, 'Carol', 955589216];
const result = data.filter((item) => typeof item === 'string');
console.log(result); 

//Você precisa, a partir de um array de produtos, filtrar somente os produtos que são frutas:
// Array de produtos no mercado
const products = [
  { name: 'Maçã', category: 'Frutas', price: 2.5 },
  { name: 'Leite', category: 'Laticínios', price: 3.0 },
  { name: 'Pão', category: 'Padaria', price: 1.5 },
  { name: 'Cenoura', category: 'Legumes', price: 1.0 },
  { name: 'Queijo', category: 'Laticínios', price: 5.0 },
  { name: 'Banana', category: 'Frutas', price: 2.0 },
];

const produtos = products.filter((product) => product.category === 'Frutas');
console.log(produtos);