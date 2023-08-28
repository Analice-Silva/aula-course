const character = {
  name: 'Luke SkyWalker',
  age: '53',
  description: {
    specieName: 'Human',
    jedi: true,
  },
  homeWorld: {
    name: 'Tatooine',
    population: '200000',
  },
};

//Queremos extrair o nome do personagem, a idade, o nome do planeta, e verificar se ele é um Jedi. Depois de feito, precisamos imprimir essas informações no console.log(). Para isso, vamos utilizar a desestruturação de objetos dessa forma:

const { name, age, homeWorld: { name: planet }, description: { jedi } } = character;

console.log(`Esse é o ${name}, ele tem ${age} anos, mora no planeta ${planet} e, por incrível que possa parecer, ele ${jedi ? 'é um Jedi' : 'não é um Jedi'}.`); 

//Como foi mostrado, para desconstruir uma chave que contém um objeto como valor, precisamos utilizar o nome da chave seguido por :. Segue a sintaxe: homeWorld: { name: planetName }. Agora planetName é uma variável que recebe o valor da propriedade name do objeto homeWorld.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matemática',
};

//As propriedades do objeto student não são nada descritivas, não é mesmo? Se fôssemos desestruturar esse objeto, as variáveis que seriam criadas ao extrair as propriedades de student teriam nomes sem significado. Pensando nisso, podemos trocar o nome da variável ao fazermos a desestruturação:

const { a: nome, b: turma, c: materia } = student;

console.log(nome);          // Maria
console.log(turma); // Turma B
console.log(materia);       // Matemática

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const humans = [
    { 
        id: 1, 
        name: 'João Silva', 
        age: 32, city: 'São Paulo', 
        email: 'joao.silva@example.com', 
        title: 'Engenheiro de Software'
    },
    { 
        id: 2, 
        name: 'Mariana Santos', 
        age: 28, city: 'Rio de Janeiro', 
        email: 'mariana.santos@example.com', 
        title: 'Cientista de Dados'
    },
    { 
        id: 3, 
        name: 'Carlos Oliveira', 
        age: 35, city: 'Belo Horizonte', 
        email: 'carlos.oliveira@example.com',
        title: 'Gerente de Produto'
    },
    { 
        id: 4, 
        name: 'Ana Souza', 
        age: 29, 
        city: 'Salvador', 
        email: 'ana.souza@example.com', 
        title: 'Designer UX'
    },
    {
        id: 5, 
        name: 'Rafael Pereira', 
        age: 27, 
        city: 'Porto Alegre', 
        email: 'rafael.pereira@example.com', 
        title: 'Desenvolvedor Web'
    },
    { 
        id: 6, 
        name: 'Fernanda Almeida', 
        age: 31, 
        city: 'Recife', 
        email: 'fernanda.almeida@example.com', 
        title: 'Designer Gráfico'
    },
    { 
        id: 7, 
        name: 'Lucas Rodrigues', 
        age: 30, 
        city: 'Brasília', 
        email: 'lucas.rodrigues@example.com', 
        title: 'Analista de Negócios'
    },
    { 
        id: 8, 
        name: 'Beatriz Costa', 
        age: 26, 
        city: 'Curitiba', 
        email: 'beatriz.costa@example.com', 
        title: 'Especialista em Marketing'
    },
    { 
        id: 9, 
        name: 'Thiago Santos', 
        age: 33, 
        city: 'Fortaleza', 
        email: 'thiago.santos@example.com', 
        title: 'Desenvolvedor Frontend'
    },
    { 
        id: 10, 
        name: 'Laura Oliveira', 
        age: 28, 
        city: 'Manaus', 
        email: 'laura.oliveira@example.com', 
        title: 'Gerente de Projetos'
    }
];

const funct  = () => {
    const namesAndTitles = humans.map(({ name, title }) => {
        return {
            name, 
            title,
        }
    });
    return namesAndTitles;
}

console.log(funct());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const names = humans.map(({ name, title }) => ({name, title}));
console.log(names);