//Exercício 1
//Dado um array de temperaturas em graus Celsius, crie uma função que retorne um novo array com as temperaturas convertidas para Fahrenheit. A fórmula de conversão é: Fahrenheit = (Celsius * 9/5) + 32.
// Temperaturas em graus Celsius
const temperaturesCelsius = [23, 10, 32, 21, 47];

const graus = () => {
    const conversao = temperaturesCelsius.map((convertidas) => {
        const resultado = (convertidas * 9/5) + 32;
        return resultado;
    });
    return conversao;
};

console.log(graus());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 2
//Dado um array de números, crie uma função que retorne um novo array com as raízes quadradas dos números. No entanto, se um número for negativo, a função deve substituí-lo por NaN (Não é um Número).

const numbers = [4, 9, -1, 16, -5, 25];

const raizes = () => {
    const quadradas = numbers.map((quadrada) => {
        if(quadrada > 0) {
            return Math.sqrt(quadrada);
        } else {
            return NaN;
        };
    });
    return quadradas;
};

console.log(raizes());

//Lista de livros
//Utilize a base de dados abaixo para fazer os próximos exercícios:
  const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
  ];

//Exercício 3
//Implemente a função formatedBookNames que deve retornar um array de strings no formato: Nome do livro - Gênero - Nome da pessoa autora.
const formatedBookNames = (livros) => {
    const strings = livros.map((string) => {
        return `${string.name} - ${string.genre} - ${string.author.name}`
    });
    return strings;
}

console.log(formatedBookNames(books));
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Exercício 4
//Implemente a função nameAndAge que deve retornar um array de objetos, cada objeto deve conter:
//A chave author, e o valor deve ser o nome da pessoa autora;
//A chave age, e o valor deve ser a idade da pessoa autora quando lançou o livro.

const nameAndAge = (object) => {
    const arrayObject = object.map((array) => {
        return {
            author: array.author.name,
            age: array.releaseYear - array.author.birthYear,
        }
    });
    return arrayObject;
}

console.log(nameAndAge(books));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
`Math.sqrt` é uma função embutida no JavaScript que é usada para calcular a raiz quadrada de um número. A sigla "sqrt" representa "square root", que em inglês significa raiz quadrada. A função `Math.sqrt` pertence ao objeto global `Math`, que oferece funções matemáticas e constantes pré-definidas.

//Aqui está como você pode usar a função `Math.sqrt` para calcular a raiz quadrada de um número:

const numero = 25;
const raizQuadrada = Math.sqrt(numero);

console.log(raizQuadrada); // Isso imprimirá 5 no console

Nesse exemplo, `Math.sqrt(25)` retorna a raiz quadrada de 25, que é 5. Portanto, a variável `raizQuadrada` conterá o valor 5.
A função `Math.sqrt` é útil quando você precisa calcular raízes quadradas em JavaScript e em muitos outros contextos matemáticos.
*/