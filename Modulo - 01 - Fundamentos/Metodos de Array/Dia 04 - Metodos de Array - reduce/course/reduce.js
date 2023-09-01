const cartoons = [
    {
      title: 'Tom and Jerry',
      episodes: 114,
      popularity: 9
    },
    {
      title: 'Looney Tunes',
      episodes: 175,
      popularity: 8
    },
    {
      title: 'Scooby-Doo',
      episodes: 390,
      popularity: 10
    },
    {
      title: 'The Simpsons',
      episodes: 700,
      popularity: 9
    },
    {
      title: 'Avatar: The Last Airbender',
      episodes: 61,
      popularity: 10
    },
    {
      title: 'Pokémon',
      episodes: 1100,
      popularity: 9
    },
    {
      title: 'Adventure Time',
      episodes: 283,
      popularity: 8
    },
    {
      title: 'Dragon Ball Z',
      episodes: 291,
      popularity: 9
    }
  ];

  //Devemos gerar um relatório com base no array de objetos cartoons com as seguintes informações: total de cartoons, total de episódios e a média de popularidade. Essas informações devem ser entregues em um único objeto:

  //{
  //  titles: (quantidade de elementos),
  //  totalEpisodes: (soma de todos os episódios),
  //  averagePopularity: (média da popularidade)
  //}

  //Com o imensurável, inexorável e inoxidável reduce, podemos fazer dessa forma:
  
  const cartoonsReport = cartoons.reduce(() => ({
    titles: cartoons.length,
    totalEpisodes: cartoons.reduce((acc, cartoon) => acc + cartoon.episodes, 0),
    averagePopularity: (cartoons.reduce((acc, cartoon) => (acc + cartoon.popularity), 0)) / cartoons.length,
}), {});

//console.log(cartoonsReport);


const musics = [
    { title: 'Eu nunca amei assim', duration: 4},
    { title: 'Você sempre será', duration: 3},
    { title: 'Chora me liga', duration: 6},
    { title: 'Tô nem aí', duration: 3},
    { title: 'Não olha pro lado', duration: 4},
    { title: 'Evidências', duration: 3},
    { title: 'Borbulhas de amor', duration: 4},
    { title: 'Como vai você', duration: 4},
    { title: 'Fim de tarde', duration: 5},
    { title: 'Ciumenta', duration: 3}
];

const musicInfo = musics.reduce((acc, music) => {
    acc.totalDuration = acc.totalDuration + music.duration;

    if(!acc.longesDuration || music.duration > acc.longesDuration.duration) {
        acc.longesDuration = music;
    }

    return acc;
}, {totalDuration: 0});

//console.log(musicInfo)

//Para fixar
//Exercício 1
//Faça uma função que some todos os números pares do array numbers usando reduce.

const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const numerosPares = (numeros) => {
    const pares = numeros.reduce((acc, numero) => {
        if (numero % 2 === 0) {
            return acc + numero;
        }
        return acc;
    }, 0);

    return pares;
}
//console.log(numerosPares(numbers));

//Gabarito
//const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
//const sum = (acc, number) => ((number % 2 === 0) ? acc + number : acc);
//const sumNumbers = (array) => array.reduce(sum, 0);
//console.log(sumNumbers(numbers)); // 152

//Exercício 2
//Crie uma função usando dados de estudantes, para mostrar na tela um relatório que diz em qual matéria a pessoa foi melhor. Você usará tanto o map quanto o reduce dentro dele.

const students = [
  {
    name: 'Jorge',
    lastName: 'Silva',
    age: 14,
    turn: 'Manhã',
    courses: [
      { name: 'Matemática', grade: 67 },
      { name: 'Português', grade: 79 },
      { name: 'Química', grade: 70 },
      { name: 'Biologia', grade: 65 },
    ],
  },
  {
    name: 'Mario',
    lastName: 'Ferreira',
    age: 15,
    turn: 'Tarde',
    courses: [
      { name: 'Matemática', grade: 59 },
      { name: 'Português', grade: 80 },
      { name: 'Química', grade: 78 },
      { name: 'Biologia', grade: 92 },
    ],
  },
  {
    name: 'Jorge',
    lastName: 'Santos',
    age: 15,
    turn: 'Manhã',
    courses: [
      { name: 'Matemática', grade: 76 },
      { name: 'Português', grade: 90 },
      { name: 'Química', grade: 70 },
      { name: 'Biologia', grade: 80 },
    ],
  },
  {
    name: 'Maria',
    lastName: 'Silveira',
    age: 14,
    turn: 'Manhã',
    courses: [
      { name: 'Matemática', grade: 91 },
      { name: 'Português', grade: 85 },
      { name: 'Química', grade: 92 },
      { name: 'Biologia', grade: 90 },
    ],
  },
  {
    name: 'Natalia',
    lastName: 'Castro',
    age: 14,
    turn: 'Manhã',
    courses: [
      { name: 'Matemática', grade: 70 },
      { name: 'Português', grade: 70 },
      { name: 'Química', grade: 60 },
      { name: 'Biologia', grade: 50 },
    ],
  },
  {
    name: 'Wilson',
    lastName: 'Martins',
    age: 14,
    turn: 'Manhã',
    courses: [
      { name: 'Matemática', grade: 80 },
      { name: 'Português', grade: 82 },
      { name: 'Química', grade: 79 },
      { name: 'Biologia', grade: 75 },
    ],
  },
];

//Resultado esperado:

[
  { name: 'Jorge', course: 'Português' },
  { name: 'Mario', course: 'Biologia' },
  { name: 'Jorge', course: 'Português' },
  { name: 'Maria', course: 'Química' },
  { name: 'Natalia', course: 'Português' },
  { name: 'Wilson', course: 'Português' },
]


//const melhoresNota = (alunos) => {
//    const melhorNota = alunos.reduce((acc, aluno) => {
//        if (acc.grade > acc.course) {
//            return acc;
//        }
//        return aluno;
//    }, 0);
//    return melhorNota;
//}

//const aa = (estudantes) => {
//    const mapeando = estudantes.map((estudante) => {
//        return {
//            name: estudante.name,
//            course: estudante.courses.reduce(melhoresNota).name,
//        };
//    });
//    return mapeando;
//}
//
//console.log(aa(students));



const melhoresNota = (acc, aluno) => {
    if (aluno.grade > acc.grade) {
        return aluno;
    }
    return acc;
};

const aa = (estudantes) => {
    const mapeando = estudantes.map((estudante) => {
        const melhorCurso = estudante.courses.reduce(melhoresNota);
        return {
            name: estudante.name,
            course: melhorCurso.name,
        };
    });
    return mapeando;
}

console.log(aa(students));






  








