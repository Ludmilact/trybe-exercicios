let n = 100;
let symbol = '*';
let inputLine = '';

if (n >=1 ) {
    for (let index = 0; index < n; index +=1) {
        inputLine = inputLine + symbol;
    };
    for (let index = 0; index < n; index +=1) {
        console.log(inputLine);
    }
} else {
    console.log("Informe um número maior que 1.")
}