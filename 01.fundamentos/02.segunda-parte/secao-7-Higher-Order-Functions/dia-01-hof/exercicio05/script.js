const checkNumber = (myNumber, number) => myNumber === number;

const result = (myNumber, callback) => {
    const number = Math.floor(Math.random() * 5) + 1;

    return callback(myNumber, number) ? "Acertou" : "Não foi dessa vez!";
};

console.log(result(1, checkNumber));
console.log(result(2, checkNumber));
console.log(result(3, checkNumber));
console.log(result(4, checkNumber));
console.log(result(5, checkNumber));