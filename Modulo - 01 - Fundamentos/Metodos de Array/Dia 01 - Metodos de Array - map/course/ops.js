
//Aplicando o conceito de Object Property Shorthand podemos ter essa mesma saída, porém com um código mais limpo. 
const herosNewProperty = [
    { name: 'Viúva Negra', universe: 'Marvel'}, 
    { name: 'Aquaman', universe: 'DC'},
    { name: 'André Noel', universe: 'Paralelo'},
]

const heroesGreetingNew = herosNewProperty.map(({name, universe}) => {
    return {
        name,
        universe,
        greeting: `Olá, meu nome é ${name} e eu sou do universo ${universe}.`
    };
});

//console.log(heroesGreetingNew);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sem Object Property Shorthand
const name = 'Robervaldo';
const age = 30;
const profession = 'Software Engineer';

const person = {
    name: name, 
    age: age,
    profession: profession,
}

console.log(person);

//Com Object Property Shorthand
//Todas as vezes que você tiver o mesmo nome de chave e valor, você pode utilizar o Object Property Shorthand, veja a
const nameNew = 'Robervaldo';
const ageNew = 30;
const professionNew = 'Software Engineer';

const personNew = {
    nameNew, 
    ageNew,
    professionNew,
}

console.log(personNew);