const produtcs = [
    { id: 1, name: 'Smartphone', price: 1500, manufacturer: 'Samsung' },
    { id: 2, name: 'Notebook', price: 2500, manufacturer: 'Dell' },
    { id: 3, name: 'TV', price: 2000, manufacturer: 'LG' },
    { id: 4, name: 'Headphones', price: 100, manufacturer: 'Sony' },
    { id: 5, name: 'Tablet', price: 1200, manufacturer: 'Apple' },
    { id: 6, name: 'Digital Camera', price: 800, manufacturer: 'Canon' },
    { id: 7, name: 'Video Game Console', price: 3000, manufacturer: 'Microsoft' },
    { id: 8, name: 'Headphone', price: 150, manufacturer: 'JBL' },
    { id: 9, name: 'Monitor', price: 700, manufacturer: 'Acer' },
];

const produtcsWidthDiscount = produtcs.map((produtc) => {
    //console.log(produtc);
    const discount = produtc.price * 0.1;
    //const discountPrice = produtc.price - discount;
    //console.log(discountPrice)
    return {
        name: produtc.name,
        newPrice: produtc.price - discount,
        discount: discount,
    }
});

//console.log(produtcsWidthDiscount);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//const heroes = ['Homem-Aranha', 'Hulk', 'Batman', 'Homer Simpson'];
//const weight = [64, 400, 95.3, 130.23];

//Deseja-se juntar em apenas uma lista de objetos que fique da seguinte forma: 
//const heroesList = [{ 'Homem-Aranha': 64}, ...];

const heroes = ['Homem-Aranha', 'Hulk', 'Batman', 'Homer Simpson'];
const weight = [64, 400, 95.3, 130.23];

const updateHeroes = (heroesArray, weightArray) => heroesArray.map((hero, index) => (
    //console.log(hero),
    //console.log(index),
    //console.log(heroesArray),
    //console.log(weightArray),
    { [hero]: weightArray[index] }
));

const heroesList = updateHeroes(heroes, weight);
//console.log(heroesList)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const heroesNew = [
    { name: 'Viúva Negra', universe: 'Marvel'}, 
    { name: 'Aquaman', universe: 'DC'},
    { name: 'André Noel', universe: 'Paralelo'},
];

const heroesGreeting = heroesNew.map((hero) => {
    return {
        name: hero.name,
        universe: hero.universe,
        greeting: `Olá, meu nome é ${hero.name} e eu sou do universo ${hero.universe}.`
    };
});

console.log(heroesGreeting);
