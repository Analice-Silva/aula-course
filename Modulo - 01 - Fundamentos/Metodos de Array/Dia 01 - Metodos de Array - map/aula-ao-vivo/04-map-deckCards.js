const data =require('./deckCards');

//Retornar todos os elementos do array cards no seguinte formato: 

//{
//    nome: 'nome do monstro',
//    tipo: 'nome do tipo do monstro',
//    atributo: 'nome do atributo do monstro',
//    img: 'link da imagem do monstro'
//}

const findElement = (array, cardElement) => {
  for (let object of array) {
    if(object.id === cardElement) {
      return object.name;
    }
  }
}
 
//const resume = (objeto) => {
//  const retorno = data.cards.map((card) => {
//    return {
//        nome: card.name,
//        tipo: findElement(data.types, card.typeId),
//        atributo: findElement(data.attributes, card.attributeId),
//        img: card.img
//    }
//  }); 
//  return retorno;
//}
//
//console.log(resume(data));

//USANDO OBJECT PROPERTY SHORTHAND
const resume = (objeto) => {
  const retorno = objeto.cards.map((card) => {
    const nome = card.name;
    const tipo = findElement(data.types, card.typeId);
    const atributo = findElement(data.attributes, card.attributeId);
    const img = card.img;

    return { nome, tipo, atributo, img }
  }); 
  return retorno;
}  

console.log(resume(data));
