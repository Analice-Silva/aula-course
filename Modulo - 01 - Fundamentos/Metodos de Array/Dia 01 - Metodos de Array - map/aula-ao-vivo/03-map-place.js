const data = require('./places');

//Transforme o array de objeto cities em um array de objetos do seguinte formato:
// {
//   state: 'Amazonas'.
//   city: 'Manaus',
//   region: 'Norte'
// }

/*
const location = (arrayRecebido) => {
  const arr = arrayRecebido.map((array) => {
     return {
       state: array.state,
       city: array.name,
       region: array.region,
     }
  });
  return arr;
}

console.log(location(data.cities));


const findState = (sigla) => {
  for (let index = 0; index < data.states.length; index += 1) {
    if (sigla === data.states[index].short) {
      return data.states[index].name;
    }
  }
}

const findRegion = (region) => {
  for (let index = 0; index < data.regions.length; index += 1) {
    if(region === data.regions[index].short) {
      return data.regions[index].name
    }
  }
}

const location = (arrayRecebido) => {
  const dataArray = arrayRecebido.cities.map((array) => {
    return {
      state: findState(array.state),
      city: array.name,
      region: findRegion(array.region),
    }
  });
  return dataArray;
}
  
console.log(location(data));
*/
//Refatorando
const findState = (sigla) => {
    for (let index = 0; index < data.states.length; index += 1) {
      if (sigla === data.states[index].short) {
        return data.states[index].name;
      }
    }
  }
  
  const findRegion = (region) => {
    for (let index = 0; index < data.regions.length; index += 1) {
      if(region === data.regions[index].short) {
        return data.regions[index].name
      }
    }
  }
  
  const location = (arrayRecebido) => {
    const dataArray = arrayRecebido.cities.map((array) => ({
        state: findState(array.state),
        city: array.name,
        region: findRegion(array.region),
    }));
    return dataArray;
  }
    
  console.log(location(data));