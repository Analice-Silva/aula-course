// Mostrar somente as pessoas que NÃO podem dirigir

const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true},
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true},
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false},
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false},
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false},
];

// Com for 
/*
const driverByFor = (drive) => {
    const drivers = [];
    for (let index = 0; index < drive.length; index += 1) {
        if(drive[index].isDriver === false) {
            drivers.push(drive[index]);
        }
    }
    return drivers;
}

console.log(driverByFor(users));
*/

// Com filter
const driverByFilter = (drivers) =>  drivers.filter((driver) => driver.isDriver === false).map((object) => object.firstName);
console.log(driverByFilter(users));

//const driverByFilter = (drivers) => drivers.filter((driver) => driver.isDriver === false);
//console.log(driverByFilter(users));

