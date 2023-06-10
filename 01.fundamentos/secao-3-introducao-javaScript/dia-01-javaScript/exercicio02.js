let num1 = 15;
let num2 = 15;
let maiorNumero;

if(num1 > num2) {
    maiorNumero = num1
} else if (num1 < num2) {
    maiorNumero = num2
} else if (num1 == num2) {
    maiorNumero = "Os dois números são iguais."
} else {
    maiorNumero = 'Número inválido'
}

console.log(maiorNumero);