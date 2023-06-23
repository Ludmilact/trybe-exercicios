let num1 = 10;
let num2 = 100;
let num3 = 1000;
let maiorNumero;

if (num1 > num2 && num1 > num3) {
    maiorNumero = num1;
} else if (num2 > num1 && num2 > num3) {
    maiorNumero = num2;
} else if (num3 > num1 && num3 > num2) {
    maiorNumero = num3;
}

console.log(maiorNumero);