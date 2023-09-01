// Ordene os números do array de forma CRESCENTE
// -----------------------------------------------------------------
// Resolvendo o problema

const scores = [2, 9, 7, 1];
const scores2 = [2, 10, 21, 1];

const comparar = (a, b) => {
    if(a < b) return -1;
        if(a > b) return 1;
        // a deve ser igual a b
            return 0
}

scores.sort(comparar);
scores2.sort(comparar);

console.log(scores);
console.log(scores2);

// --------------------------------------------------------------------
// Forma simplificada
// Ordene os números do array de forma CRESCENTE

const score = [2, 9, 7, 1];
const score2 = [2, 10, 21, 1];

score.sort((a, b) => a -b);
score2.sort((a, b) => a - b);

console.log(score);
console.log(score2);