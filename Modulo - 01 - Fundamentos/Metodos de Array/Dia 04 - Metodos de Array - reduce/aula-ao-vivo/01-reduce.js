const array = [10, 78, 27, 10, 23, 188];


//Some os valores do array e retorne esta soma

const sum = (arrayNumbers) => {
    return arrayNumbers.reduce((acc, number) => {
        return acc + number;
    }, 0);
}
console.log(sum(array));  